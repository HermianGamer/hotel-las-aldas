import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ModeToggle } from '@/components/ModeToggle';
import Login from './Login';

interface HeaderProps {
    isHomePage?: boolean;
}

const Header = ({ isHomePage = false }: HeaderProps) => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        if (!isHomePage) return; // Solo aplicar el efecto de scroll en home

        const handleScroll = () => {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            if(scroll > 100){
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isHomePage]);

    const getHeaderClasses = () => {
        if (isHomePage) {
            // Home page: fixed, con efecto de scroll
            return `fixed top-0 z-[9999] w-full ${scrolling ? "bg-background text-foreground animate-in duration-500" : "text-foreground dark:text-background animate-out duration-500"}`;
        } else {
            // Otras páginas: sticky, siempre con fondo
            return "sticky top-0 z-[9999] w-full bg-background text-foreground";
        }
    }

    const getPages = () => {
        if (isHomePage) {
            // Home page: fixed, con efecto de scroll
            return (
                <div className="uppercase font-600 text-sm md:text-base">
                    <ul>
                        <li className="inline-block md:mr-4 mr-2"><a href="/all">Reservar</a></li>
                        <li className="inline-block md:mr-4 mr-2"><a href="/#experiences">Experiencias</a></li>
                        <li className="inline-block md:mr-4 mr-2"><a href="https://wa.me/51923381810" target="_blank">Contacto</a></li>
                        <li className="inline-flex items-center"><Login /></li>
                    </ul>
                </div>
            );
        } else {
            // Otras páginas: sticky, siempre con fondo
            return (
                <div className="uppercase font-600 text-sm md:text-base">
                    <ul>
                        <li className="inline-block md:mr-4 mr-2"><a href="/">Inicio</a></li>
                        <li className="inline-block md:mr-4 mr-2"><a href="/all">Reservar</a></li>
                        <li className="inline-block md:mr-4 mr-2"><a href="https://wa.me/51923381810" target="_blank">Contacto</a></li>
                        <li className="inline-flex items-center"><Login /></li>
                    </ul>
                </div>
            );
        }
    }

    return(
        <header className={getHeaderClasses()}>
            <div className="container flex items-center justify-between py-5">
                {/* Mode toggle */}
                <ModeToggle />

                {/* Navbar  */}
                <Navbar />

                {getPages()}

            </div>
        </header>
    );
};

export default Header;