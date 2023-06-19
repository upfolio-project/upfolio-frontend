import {commonApi} from "@/shared/api";
import type {
    RegisterTokenRequest,
    RegisterTokenSuccessResponse,

    RegisterByPhoneNumberRequest,
    RegisterByPhoneNumberSuccessResponse,

    ConfirmPhoneOTPRequest,
    ConfirmPhoneOTPSuccessResponse,

    FinishRegistrationRequest,
    FinishRegistrationSuccessResponse,
} from "@/shared/api/entities";
import {
    GetValidationCode,
    GetValidationPassword,
    GetValidationPhone,
} from "@/shared/api/services/getValidation";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {registerSlice} from "@/shared/store/authSlice/register";
import {loginSlice} from "@/shared/store/authSlice/login";
import {setToken} from "@/shared/api/services/tokenServices";

export const Register = commonApi.injectEndpoints({
    endpoints: build => ({
        getRegisterToken: build.query<RegisterTokenSuccessResponse, RegisterTokenRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const localToken = window.localStorage.getItem("register");

                if (localToken !== null) {
                    return {data: {timestamp: "", token: localToken}};
                }

                const result = await fetchWithBQ({
                    url: '/register/getRegisterToken',
                    method: 'GET'
                });

                const data = result?.data as RegisterTokenSuccessResponse;
                if (!data?.token) return {
                    error: {
                        error: 'Bad phone',
                        status: 'CUSTOM_ERROR',
                    }
                };

                window.localStorage.setItem("register", data.token);
                return {data: data};
            },
            providesTags: () => []
        }),
        commenceByPhoneNumber: build.mutation<RegisterByPhoneNumberSuccessResponse, RegisterByPhoneNumberRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {phoneNumber, registerToken} = arg;
                const phone = '7' + phoneNumber.split('').map(value => value == '-' ? '' : value).join('');
                if (GetValidationPhone(phone)) return {
                    error: {
                        error: 'Bad phone',
                        status: 'CUSTOM_ERROR',
                    }
                };
                const result = await fetchWithBQ({
                    url: '/register/phoneNumber',
                    method: 'POST',
                    body: {registerToken: registerToken, phoneNumber: phone}
                });

                const data = result.data as RegisterByPhoneNumberSuccessResponse;
                if (result.error) return {error: result.error};
                return {data};
            },
            invalidatesTags: [],
        }),
        confirmPhoneOTP: build.mutation<ConfirmPhoneOTPSuccessResponse, ConfirmPhoneOTPRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {code} = arg;
                if (GetValidationCode(code)) return {
                    error: {
                        error: 'Code must contain only numbers',
                        status: 'CUSTOM_ERROR',
                    }
                };
                const result = await fetchWithBQ({
                    url: '/register/confirm',
                    method: 'POST',
                    body: arg
                });
                const data = result.data as ConfirmPhoneOTPSuccessResponse;
                if (result.error) return {error: result.error};

                return {data};
            },
            invalidatesTags: []
        }),
        finish: build.mutation<FinishRegistrationSuccessResponse, FinishRegistrationRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {password} = arg;
                if (GetValidationPassword(password)) return {
                    error: {
                        error: 'Bad password',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const result = await fetchWithBQ({
                    url: '/register/finishSpecialistRegistration',
                    method: 'POST',
                    body: arg
                });

                const data = result.data as FinishRegistrationSuccessResponse;
                if (result.error) return {error: result.error};

                return {data};

            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setError} = registerSlice.actions;
                const {setAuth} = loginSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data.token) {
                        dispatch(setAuth(true));
                        setToken(result?.data?.token, "token");
                        setToken(result?.data?.refreshToken, "refreshToken");
                        localStorage.removeItem('register');
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

export const {
    useCommenceByPhoneNumberMutation,
    useGetRegisterTokenQuery,
    useConfirmPhoneOTPMutation,
    useFinishMutation
} = Register;