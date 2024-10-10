import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

const useFirebaseToken = (): string | null => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                try {
                    // Obtém o token do usuário autenticado
                    const idToken = await currentUser.getIdToken();
                    setToken(idToken);
                } catch (error) {
                    console.error("Erro ao obter o token:", error);
                    setToken(null);
                }
            } else {
                // Usuário não autenticado
                setToken(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return token;
};

export default useFirebaseToken;
