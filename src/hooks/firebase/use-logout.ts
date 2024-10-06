import { auth } from "@/lib/firebase";
import { useState } from "react";

const useLogout = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const logout = async () => {
        setLoading(true);
        setError(null);

        try {
            await auth.signOut();
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading, error };
};

export default useLogout;
