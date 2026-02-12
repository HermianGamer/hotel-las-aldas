import { formatPrice } from "@/lib/helper";
import type { Room } from "@/lib/types";
import { useState, type ChangeEvent } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";


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
    const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: undefined,
    checkOut: undefined,
    roomCategory: room.category,
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

    const handleCheckOutChange = (date: Date | undefined) => {
        if (date) {
            const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            setBookingData(prev => ({
                ...prev,
                checkOut: localDate
            }));
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

    const totalPrice = room.price*bookingData.noOfRoom * numberOfDays! * room.capacity - (room.price * 0.3)*bookingData.children;


    return (
        <section className="mt-10 md:mt-0">
            <form className="bg-secondary text-background dark:text-foreground px-6 pt-8 pb-6">
                <div className="relative mb-4 flex items-center justify-between after:bg-background after:absolute after:-bottom-0.5 after:h-0.75 dark:after:bg-foreground after:w-full after:content-[' ']">
                    <h5 className="font-500 text-300">Reservar</h5>
                    <p className="text-300 font-600">{Object.is(totalPrice, NaN) ? "S/ --" : formatPrice(totalPrice)}</p>
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


















                <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 mb-6">
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
                        max={room.capacity - bookingData.children} min={1} value={bookingData.adults} onChange={handleNumberChange}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Niños</Label>
                        <Input type='number' name='children' className='bg-foreground/5 hover:bg-foreground/10 border-foreground/20'
                        max={room.capacity - bookingData.adults} min={0} value={bookingData.children} onChange={handleNumberChange}/>
                    </div>

                </div>

                <Button variant={'outline'} className="mt-8 w-full bg-foreground/5 hover:bg-foreground/10 border-foreground/20 text-background dark:text-foreground" type="submit">Reservar</Button>















            </form>
        </section>
        );
    };

export default Reservation