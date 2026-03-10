import { toast } from "sonner";
import { Button } from "./ui/button";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

interface CancelBookingProps {
    reservationId: string,
}



const CancelBooking = ({reservationId}: CancelBookingProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState ('');

    const handleCancelBooking = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/cancel-booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({reservationId})
            });

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message || 'Ha ocurrido un error al intentar cancelar tu reserva.')
            }

            toast.success('¡Reserva cancelada exitosamente.');
            setIsOpen(false);

            setTimeout(() => {
                window.location.href = '/bookings';
            }, 3500);

        } catch(err) {
            setError(err instanceof Error ? err.message: 'Ha ocurrido un error al intentar cancelar tu reserva.');
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <div>
        <Button variant="destructive" onClick={() => setIsOpen(true)} className="cursor-pointer" >Cancelar Reserva</Button>

        <AlertDialog open={isOpen} onOpenChange={setIsOpen}> 
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta accion no se puede rebovinar.
                        {
                            error && (
                                <div className="mt-2 flex items-start border border-red-200 bg-red-50 p-3 text-red-700">
                                    {error}
                                </div>
                            )
                        }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isLoading} >Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={(e) => {
                        e.preventDefault();
                        handleCancelBooking();
                    }}
                    disabled={isLoading}
                    className='bg-red-500 hover:bg-red-600'
                    >{isLoading ? 'Cancelando...' : 'Cancelar reserva'}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent> 
        </AlertDialog>
    </div>
  )
}


//npx shadcn@latest add alert-dialog

export default CancelBooking
