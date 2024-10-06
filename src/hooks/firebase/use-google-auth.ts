// hooks/useGoogleAuth.ts

import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState, useCallback } from "react";

interface UseGoogleAuthReturn {
    signInWithGoogle: () => Promise<void>;
    error: string | null;
}

const useGoogleAuth = (): UseGoogleAuthReturn => {
    const [error, setError] = useState<string | null>(null);

    const signInWithGoogle = useCallback(async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user); // Retorna o usuário autenticado, se necessário
        } catch (err) {
            const errorMessage = (err as Error).message;
            setError(errorMessage);
            console.error("Erro ao realizar o login: ", errorMessage);
        }
    }, []);

    return { signInWithGoogle, error };
};

export default useGoogleAuth;
