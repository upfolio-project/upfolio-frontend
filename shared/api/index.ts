import {
    BaseQueryFn, createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError
} from "@reduxjs/toolkit/dist/query/react";
import {setCookie} from "cookies-next";
import {getToken, setToken} from "@/shared/api/services/tokenServices";

export const BASE_URL = process.env['NEXT_PUBLIC_BASE_URL'];


const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
        const token = getToken("token");
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        return headers;
    },
});

const customFetchBase: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status == 401) {
        console.log(123);
        if (!getToken("refreshToken")) {
            return result;
        }

        const refreshResult = await baseQuery({
            credentials: 'include',
            url: '/authorize/refresh',
            method: 'POST',
            body: {refreshToken: getToken("refreshToken")}
        }, api, extraOptions);
        const data = refreshResult.data as { token: string, refreshToken: string };
        if (data) {
            setToken(data.token, "token");
            setToken(data.refreshToken, "refreshToken");
            return baseQuery(args, api, extraOptions);
        } else {
            if (typeof window !== "undefined") {
                localStorage.clear();
            } else {
                setCookie("token", "");
                setCookie("refreshToken", "");
            }
        }
    }
    return result;

};

export const commonApi = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: customFetchBase,
    endpoints: () => ({}),
});