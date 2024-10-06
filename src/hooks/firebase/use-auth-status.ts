// hooks/useAuthStatus.ts

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const useAuthStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { isLoggedIn, loading };
};

export default useAuthStatus;
