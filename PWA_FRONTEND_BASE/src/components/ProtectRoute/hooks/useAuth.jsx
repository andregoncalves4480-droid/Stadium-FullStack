import { useCallback, useState } from "react";
import { apiFetch } from "../../../service/api/client";

export const useAuth = () => {
    const [isValidLogin, setValidLogin] = useState(false);
    const [isFetching, setFeching] = useState(true);

    const hasLogin = useCallback(() => {
        setFeching(true);

        apiFetch("/api/auth/me", {
            headers: { Accept: "application/json" }
        })
        .then((response) => response.json())
        .then((response) => {
            setValidLogin(response.auth);
        })
        .catch(() => {
            setValidLogin(false);
        })
        .finally(() => {
            setFeching(false);
        });
    }, []);

    return {
        isValidLogin,
        hasLogin,
        isFetching
    };
};
