import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const BASE_URL = process.env['NEXT_PUBLIC_BASE_URL'];

export const commonApi = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            return headers;
        }
    }),
    endpoints: () => ({}),
});