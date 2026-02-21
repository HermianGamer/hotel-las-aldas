"use client";

import type { Currency } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrayOfPrimitivesFunctions } from 'sanity';
import { toast } from "sonner";


declare global {
    interface Window {
        CulqiCheckout: new (
            publicKey: string,
            config: CulqiConfig
        ) => CulqiInstance;
    }
};


interface CulqiInstance {
    token?: {id: string};
    order?: unknown;
    error?: {user_message: string};
    culqi: () => void;
    open: () => void;
    close: () => void;
}


interface CulqiConfig {
    settings: {
        title: string;
        currency: string;
        amount: number;
        order: string;
        xculqirsaid: string;
        rsapublickey: string;
    };
    client: {
        email: string;
    };
    options: {
        lang: string;
        installments: boolean;
        modal: boolean;
        container?: string;
        paymentMethods: {
            tarjeta?: boolean;
            yape?: boolean;
            billetera?: boolean;
            bancaMovil?: boolean;
            agente?: boolean;
            cuotealo?: boolean;
        };
        paymentMethodsSort: string[];
    };
}


const CULQI_CONFIG = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_CULQI_PUBLIC_KEY!,
    ORDER_ID: process.env.NEXT_PUBLIC_CULQI_ORDER_ID!,
    RSA_ID: process.env.NEXT_PUBLIC_CULQI_RSA_ID!,
    RSA_PUBLIC_KEY: process.env.NEXT_PUBLIC_CULQI_RSA_PUBLIC_KEY!,
    TITLE: process.env.NEXT_PUBLIC_CULQI_TITLE!,
    PAYMENT_METHODS: { yape: true },
};


const Checkoutimplement = () => {

    const [amount, setAmount] = useState(10000);
    const [error, setError] = useState("");

    const scriptsLoadedRef = useRef<boolean>(false);
    const culqiInstanceRef = useRef<CulqiInstance | null>(null);


    const createCulqiConfig = useCallback(
        (currentAmount: number): CulqiConfig => ({
            settings: {
                title: CULQI_CONFIG.TITLE,
                currency: "PEN",
                amount: currentAmount,
                order: CULQI_CONFIG.ORDER_ID,
                xculqirsaid: CULQI_CONFIG.RSA_ID,
                rsapublickey: CULQI_CONFIG.RSA_PUBLIC_KEY,
            },
            client:{
                email: "gianfranco.scarpatiperez@gmail.com",
            },
            options: {
                lang: "auto",
                installments: true,
                modal: true,
                paymentMethods: CULQI_CONFIG.PAYMENT_METHODS,
                paymentMethodsSort: Object.keys(CULQI_CONFIG.PAYMENT_METHODS),
            },
        }),
        []
    );

    const handleToken = useCallback(
        async (tokenId: string) => {
            try {
                culqiInstanceRef.current?.close();

                // setError("");
                // setVerifyingPayment(true);
                // setIsProcessing(true);
                // const amountInCentimos = Math.round(reservaData.total * 100);

                const reponse = await fetch("/api/culqi/charge", {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify({
                        token: tokenId,
                        amount: amount,
                        currency_code: "PEN",
                        email: "gianfranco.scarpatiperez@gmail.com",
                    }),
                });

                const data = await reponse.json();

                if (data.success) {
                    await crearReservaFinal();
                } else {
                    setError(data.message || "error al procesar el pago");
                    setIsProcessing(false);
                }
            } catch (err) {
                console.error("Error en el handleToken: ", err);
                setError("Error de conexion. Intenta nuevamente");
                setIsProcessing(false);
            } finally {
                setVerifyingPayment(false);
            }
        },
        [reservaData, user?.email, crearReservaFinal]
    );




// iniciar culqi
    const initializeCulqi = useCallback(
        (currentAmount: number) => {
            if (!window.CulqiCheckout) return;

            const config = createCulqiConfig(currentAmount);
            const instance = new window.CulqiCheckout(
                CULQI_CONFIG.PUBLIC_KEY,
                config
            );

            instance.culqi = function () {
                if (instance.token) {
                    console.log("Token creado: ", instance.token.id);
                    handleToken(instance.token.id);
                } else if (instance.order) {
                    console.log('Order creada: ', instance.order);
                } else {
                    console.log("Error", instance.error);
                    setError(instance.error?.user_message || "Error al procesar el pago");
                    setLoading(false);
                }
            };

            culqiInstanceRef.current = instance;
        },
        [createCulqiConfig, handleToken]
    );



// cargar cripts de culqi
    useEffect(() => {
        if (scriptsLoadedRef.current) return;

        const loadScript = (src: string): Promise<void> => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async  = true;
                script.onload = () => resolve();
                script.onerror = reject;
                document.body.appendChild(script);
;            });
        };

        const loadScripts = async () => {
            try {
                await loadScript("https://3ds.culqi.com");
                await loadScript("https://js.culqi.com/checkout-js");
                scriptsLoadedRef.current = true;
                initializeCulqi(amount);
            } catch (err) {
                console.error("Error cargando scripts Culqi", err);
                toast.error("Error al cargar el sistema de pagos. Regarga la página.");
            }
        };

        loadScripts();
    }, [amount, initializeCulqi]);


  return <div>Checkoutimplement</div>;
};

export default Checkoutimplement;

// https://www.youtube.com/watch?v=jPiv3thM7Kg 38:34