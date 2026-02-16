import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import {useStore} from '@nanostores/react'
import {$userStore} from '@clerk/astro/client'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SignOutButton } from "@clerk/astro/react";

const Dashboard = () => {

    const user = useStore($userStore);

    if(!user){
        return null;
    }

    const getUserInitials = ()=> {
        if(user.firstName && user.lastName){
            return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
        }else if(user.firstName){
            return user.firstName[0].toUpperCase();
        }else if(user.username){
            return user.username[0].toUpperCase();
        }
        return 'U';
    }

    return  (
    <DropdownMenu>
        <DropdownMenuTrigger className="translate-y-1 md:translate-y-0" asChild>
            <button className="flex items-center gap-2">
                <Avatar className="size-8 translate-y-1 md:translate-y-0">
                    <AvatarImage className="cursor-pointer" src={user.imageUrl || ''} />
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                </Avatar>
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-4 w-42.5" align="center">
            <DropdownMenuItem asChild className="cursor-pointer focus:bg-primary">
                <a href="/account" className="w-full">Mi Cuenta</a>
            </DropdownMenuItem>

            <DropdownMenuItem asChild className="cursor-pointer focus:bg-primary">
                <a href="/bookings" className="w-full">Reservas</a>
            </DropdownMenuItem>

            <DropdownMenuItem 
                className="cursor-pointer focus:bg-primary"
                onSelect={(e) => {
                    e.preventDefault();
                }}
            >
                <SignOutButton redirectUrl={window.location.href}>
                    <button className="w-full text-left">
                        Cerrar sesión
                    </button>
                </SignOutButton>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default Dashboard

