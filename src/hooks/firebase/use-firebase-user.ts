import { useEffect, useState } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface UseFirebaseUserResult {
    user: FirebaseUser | null;
    loading: boolean;
    error: Error | null;
}

const useFirebaseUser = (): UseFirebaseUserResult => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            setLoading(true);
            if (currentUser) {
                try {
                    // Aqui você pode buscar dados adicionais do usuário, se necessário
                    // const userData = await fetchUserData(currentUser.uid); // Implementar esta função
                    setUser(currentUser); // ou userData se você estiver pegando dados do Firestore
                } catch (err) {
                    setError(err as Error); // Certifique-se de que o erro é do tipo Error
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, loading, error };
};

export default useFirebaseUser;
