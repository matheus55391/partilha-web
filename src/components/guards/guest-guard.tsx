"use client";
import useAuthStatus from "@/hooks/firebase/use-auth-status";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SplashScreen from "../SplashScreen";

const GuestGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { isLoggedIn, loading } = useAuthStatus();

    useEffect(() => {
        if (!loading && isLoggedIn) {
            router.push("/dashboard");
        }
    }, [loading, isLoggedIn, router]);

    if (loading || isLoggedIn) {
        return <SplashScreen />;
    }

    return <>{children}</>;
};

export default GuestGuard;
