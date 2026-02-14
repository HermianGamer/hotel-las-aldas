import {SignedOut, SignInButton} from '@clerk/astro/react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react';


const Login = () => {
    const [currentUrl, setCurrentUrl] = useState('')

    useEffect(()=>{
        setCurrentUrl(window.location.href);
    }, []);

    return (
    <SignedOut>
        <SignInButton signUpForceRedirectUrl={currentUrl} mode='modal'>
            <Button className='uppercase font-semibold text-sm md:text-base'>Log In</Button>
        </SignInButton>
    </SignedOut>
    );
};

export default Login