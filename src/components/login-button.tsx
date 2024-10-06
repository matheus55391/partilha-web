"use client";
import { Button } from "@/components/ui/button";
import useGoogleAuth from "@/hooks/firebase/use-google-auth";

export const LoginButton = () => {
    const { signInWithGoogle } = useGoogleAuth();

    const handleClick = async () => {
        await signInWithGoogle();
    };

    return (
        <Button
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={handleClick}
        >
            Experimente Grátis
        </Button>
    );
};
