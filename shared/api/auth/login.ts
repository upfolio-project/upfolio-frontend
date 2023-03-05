import {commonApi} from "@/shared/api";
import {AuthorizeByPasswordRequest, JWTSuccessAuthResponse} from "@/shared/api/entities";
import {loginSlice} from "@/shared/store/authSlice/login";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {GetValidationPassword, GetValidationPhone} from "@/shared/api/services/getValidation";
import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export const Login = commonApi.injectEndpoints({
    endpoints: build => ({
        loginByPassword: build.mutation<JWTSuccessAuthResponse, AuthorizeByPasswordRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {password, phoneNumber} = arg;

                if (GetValidationPassword(password)) return {
                    error: {
                        error: 'Bad password',
                        status: 'CUSTOM_ERROR'
                    }
                };
                if (GetValidationPhone(phoneNumber)) return {
                    error: {
                        error: 'Bad phone',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const body = {password: password, phoneNumber: phoneNumber};

                const result = await fetchWithBQ({
                    url: '/v1/authorize/byPassword',
                    method: 'POST',
                    body,
                });

                if (result.error) throw result.error;

                const data = result.data as JWTSuccessAuthResponse;

                return {data};
            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setAuth, setError} = loginSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data.token && result.data.refreshToken) {
                        localStorage.setItem('token', result?.data?.token);
                        localStorage.setItem('refreshToken', result?.data?.refreshToken);
                        setAuth(true);
                    }
                } catch (e: any) {
                    const error: string = e?.error?.error;
                    dispatch(setError(GetErrorDescription(error)));
                }
            },
            invalidatesTags: []
        }),
    }),
    overrideExisting: false,
});

export const {useLoginByPasswordMutation} = Login;