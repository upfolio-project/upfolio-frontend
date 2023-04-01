import {getCookie, setCookie} from "cookies-next";

export const setToken = (token: string, typeToken: "refreshToken" | "token") => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(typeToken, token);
    }
    setCookie(typeToken, token);

};

export const getToken = (typeToken: "refreshToken" | "token") => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(typeToken);
    }
    return getCookie(typeToken);
};