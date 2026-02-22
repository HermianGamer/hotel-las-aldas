// reservation.tsx

import { formatPrice } from "@/lib/helper";
import { useState, type ChangeEvent } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import type {Room} from 'sanity.types';
import { toast } from "sonner";
import { useCallback, useEffect, useRef } from "react";
import { useAuth, } from "@clerk/astro/react";
import { useSyncExternalStore } from "react";
import { $userStore } from "@clerk/astro/client";

interface ReservationProps {
    room: Room;
}

interface BookingData {
    checkIn: Date| undefined;
    checkOut: Date| undefined;
    roomCategory: string;
    noOfRoom: number;
    adults: number;
    children: number;
}

const Reservation = ({room}: ReservationProps) => {
    const {userId} = useAuth()
    const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: undefined,
    checkOut: undefined,
    roomCategory: room.category ?? '',
    noOfRoom:1,
    adults:  1,
    children:0,
});

    const handleCheckInChange = (date: Date | undefined) => {
        if (date) {
            // Asegura que la fecha se maneje en hora local
            const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            setBookingData(prev => ({
                ...prev,
                checkIn: localDate,
                checkOut: prev.checkOut && prev.checkOut <= localDate ? undefined : prev.checkOut
            }));
        }
    };

    const handleCheckOutChange = async (date: Date | undefined) => {
        if (date) {
            const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            setBookingData(prev => ({
                ...prev,
                checkOut: localDate
            }));
        }

        const utcDate = new Date(
            Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
        );

        if(bookingData.checkIn){
            try{
                const response = await fetch('/api/check-availability', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        roomSlug: room.slug,
                        checkIn: bookingData.checkIn.toISOString(),
                        checkOut: utcDate.toISOString(),
                    })
                })

                const data = await response.json();

                if(!data.available){
                    toast.error('Este bungalow no está disponible para las fechas seleccionadas.');
                    setBookingData(prev => ({
                        ...prev,
                        checkOut: undefined
                    }))
                }

            }catch(error){
                console.log('Error checking availability', error)
            }
        }
    };

    const handleNumberChange  = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;

        setBookingData(prev => ({
            ...prev,
            [name]: parseInt(value, 10)
        }))
    };;

    const getNumberOfDays = (startDate:Date | undefined, endDate:Date | undefined)=>{
        if(!startDate || !endDate){
            return;
        }

        const startDateTime = new Date(startDate).getTime()
        const endDateTime = new Date(endDate).getTime()


        const timeDifference = endDateTime - startDateTime;
        const daysDifference = timeDifference / (1000 * 3600 * 24)

        return Math.ceil(daysDifference);
    };

    const numberOfDays = getNumberOfDays(bookingData.checkIn, bookingData.checkOut);

    const totalPriceRes = (room.price ?? 0)*bookingData.noOfRoom * numberOfDays! * (room.capacity ?? 0) - ((room.price ?? 0) * 0.3)*bookingData.children;

    const generateReservationId = () => {
        const randomNum = Math.floor(Math.random() * 10000).toString().padStart(6, '0');
        return `RES-${randomNum}`
    }

    const reservationId = generateReservationId();

    // Agregar al inicio del componente, junto a los otros useState
    const culqiInstanceRef = useRef<any>(null);
    const scriptsLoadedRef = useRef<boolean>(false);

    const user = useSyncExternalStore($userStore.listen, $userStore.get, $userStore.get);

    // Esta función se llama cuando Culqi genera el token exitosamente
    const handleToken = useCallback(async (tokenId: string) => {
        if (!bookingData.checkIn || !bookingData.checkOut || !userId) return;

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: tokenId,
                    amount: Math.round(totalPriceRes * 100), // Culqi trabaja en centimos
                    email: user?.primaryEmailAddress?.emailAddress ?? '',
                    reservationId,
                    userId,
                    roomId: room._id,
                    checkIn: bookingData.checkIn.toISOString().split('T')[0],
                    checkOut: bookingData.checkOut.toISOString().split('T')[0],
                    adults: bookingData.adults,
                    children: bookingData.children,
                    totalPrice: totalPriceRes,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('¡Reserva confirmada! Tu pago fue procesado exitosamente.');
                // Aquí puedes redirigir a una página de confirmación
                // window.location.href = `/confirmacion/${reservationId}`;
            } else {
                toast.error(data.message || 'Error al procesar el pago');
            }
        } catch (err) {
            console.error('Error:', err);
            toast.error('Error de conexión. Intenta nuevamente.');
        }
    }, [bookingData, totalPriceRes, reservationId, userId, room._id]);


    // Inicializar Culqi con los datos actuales
    const initializeCulqi = useCallback(() => {
        if (!window.CulqiCheckout) return;

        const instance = new window.CulqiCheckout(
            import.meta.env.PUBLIC_CULQI_PUBLIC_KEY,
            {
                settings: {
                    title: import.meta.env.PUBLIC_CULQI_TITLE,
                    currency: 'PEN',
                    amount: Math.round(totalPriceRes * 100),
                    order: import.meta.env.PUBLIC_CULQI_ORDER_ID,
                    xculqirsaid: import.meta.env.PUBLIC_CULQI_RSA_ID,
                    rsapublickey: import.meta.env.PUBLIC_CULQI_RSA_PUBLIC_KEY,
                },
                client: {
                    email: user?.primaryEmailAddress?.emailAddress ?? '' // idealmente de Clerk
                },
                options: {
                    lang: 'auto',
                    installments: false,
                    modal: true,
                    paymentMethods: { tarjeta: true, yape: true },
                    paymentMethodsSort: ['tarjeta', 'yape'],
                },
            }
        );

        instance.culqi = function () {
            if (instance.token) {
                handleToken(instance.token.id);
            } else {
                toast.error(instance.error?.user_message || 'Error al procesar el pago');
            }
        };

        culqiInstanceRef.current = instance;
    }, [totalPriceRes, handleToken]);


    // Cargar scripts de Culqi una sola vez
    useEffect(() => {
        if (scriptsLoadedRef.current) return;

        const loadScript = (src: string): Promise<void> =>
            new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = reject;
                document.body.appendChild(script);
            });

        const loadScripts = async () => {
            try {
                await loadScript('https://3ds.culqi.com');
                await loadScript('https://js.culqi.com/checkout-js');
                scriptsLoadedRef.current = true;
                initializeCulqi();
            } catch (err) {
                toast.error('Error al cargar el sistema de pagos. Recarga la página.');
            }
        };

        loadScripts();
    }, [initializeCulqi]);


    // Reemplaza tu handleSubmit actual con este:
    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!userId) {
            toast.error('Por favor inicia sesión para reservar.');
            return;
        }

        if (!bookingData.checkIn || !bookingData.checkOut) {
            toast.error('Por favor selecciona fechas de check-in y check-out.');
            return;
        }

        if (Object.is(totalPriceRes, NaN) || totalPriceRes <= 0) {
            toast.error('Error calculando el precio. Verifica las fechas.');
            return;
        }

        // Reinicializar Culqi con el monto actualizado y abrir el checkout
        initializeCulqi();
        culqiInstanceRef.current?.open();
    };

    return (
        <section className="mt-10 md:mt-0">
            <div className="bg-secondary text-background dark:text-foreground px-6 pt-8 pb-6">
                <div className="relative mb-4 flex items-center justify-between after:bg-background after:absolute after:-bottom-0.5 after:h-0.75 dark:after:bg-foreground after:w-full after:content-[' ']">
                    <h5 className="font-500 text-300">Reservar</h5>
                    <p className="text-300 font-600">{Object.is(totalPriceRes, NaN) ? "S/ --" : formatPrice(totalPriceRes)}</p>
                </div>

                <p className="mb-0">
                    · Los horarios de check-in y check-out son flexibles, contáctenos para coordinar.
                </p>
                <p className="mb-0">
                    · La categoría "Niños" aplica para edades de 2 a 10 años.
                </p>
                <p className="mb-6">
                    · Los bebés menores de 2 años se alojan gratuitamente.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 mb-6">
                    {/* Check In */}
                    <div>
                        <Label className="mb-2 block">Check In</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button type="button" variant={'outline'} className={cn('w-full justify-start overflow-hidden text-left font-normal bg-foreground/5 hover:bg-foreground/10 border-foreground/20 text-background dark:text-foreground', !bookingData.checkIn && 'text-background dark:text-foreground')}>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-background dark:text-foreground" />
                                    {bookingData.checkIn ? format(bookingData.checkIn, 'PPP') : 'Elige una fecha'}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={bookingData.checkIn}
                                    onSelect={handleCheckInChange}
                                    disabled={(date) => {
                                        const today = new Date()
                                        today.setHours(0,0,0,0)
                                        return date < today;
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Boton de fecha check out */}
                    <div>
                        <Label className="mb-2">Check Out</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button type="button" variant={'outline'} className={cn('w-full justify-start overflow-hidden text-left font-normal bg-foreground/5 hover:bg-foreground/10 border-foreground/20 text-background dark:text-foreground', !bookingData.checkOut && 'text-background dark:text-foreground')}>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-background dark:text-foreground" />
                                    {bookingData.checkOut ? format(bookingData.checkOut, 'PPP') : 'Elige una fecha'}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="center" side="bottom" sideOffset={8}>
                                <Calendar
                                    mode="single"
                                    selected={bookingData.checkOut}
                                    onSelect={handleCheckOutChange}
                                    disabled={(date) => date < new Date() || (bookingData.checkIn ? date <= bookingData.checkIn : false)}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Adultos</Label>
                        <Input type='number' name='adults' className='bg-foreground/5 hover:bg-foreground/10 border-foreground/20'
                        max={(room.capacity ?? 0) - bookingData.children} min={1} value={bookingData.adults} onChange={handleNumberChange}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Niños</Label>
                        <Input type='number' name='children' className='bg-foreground/5 hover:bg-foreground/10 border-foreground/20'
                        max={(room.capacity ?? 0) - bookingData.adults} min={0} value={bookingData.children} onChange={handleNumberChange}/>
                    </div>

                    <Button type="submit" variant={'outline'} className="mt-8 w-full bg-foreground/5 hover:bg-foreground/10 border-foreground/20 text-background dark:text-foreground md:col-start-1 md:col-end-3">Reservar</Button>

                </form>
            </div>
        </section>
        );
    };

export default Reservation