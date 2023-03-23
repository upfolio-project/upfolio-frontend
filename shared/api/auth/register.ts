import {commonApi} from "@/shared/api";
import {
    ConfirmPhoneOTPRequest, FinishRegistrationRequest,
    JWTSuccessAuthResponse,
    RegisterByPhoneNumberRequest, RegisterTokenRequest, RegisterTokenSuccessResponse,
    SuccessResponse
} from "@/shared/api/entities";
import {
    GetValidationCode,
    GetValidationPassword,
    GetValidationPhone,
} from "@/shared/api/services/getValidation";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {registerSlice} from "@/shared/store/authSlice/register";
import {loginSlice} from "@/shared/store/authSlice/login";

export const Register = commonApi.injectEndpoints({
    endpoints: build => ({
        getRegisterToken: build.query<RegisterTokenSuccessResponse, RegisterTokenRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const localToken = window.localStorage.getItem("register");

                if (localToken) {
                    return {data: {token: localToken, timestamp: ""}};
                }

                const result = await fetchWithBQ({
                    url: '/register/getRegisterToken',
                    method: 'Get'
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
        commenceByPhoneNumber: build.mutation<SuccessResponse, RegisterByPhoneNumberRequest>({
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

                const data = result.data as SuccessResponse;
                if (result.error) throw result.error;
                return {data};
            },
            invalidatesTags: [],
        }),
        confirmPhoneOTP: build.mutation<SuccessResponse, ConfirmPhoneOTPRequest>({
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
                const data = result.data as SuccessResponse;
                if (!data.success) return {
                    error: {
                        error: '',
                        status: 'CUSTOM_ERROR',
                    }
                };
                if (result.error) throw result.error;

                return {data};
            },
            invalidatesTags: []
        }),
        finish: build.mutation<JWTSuccessAuthResponse, FinishRegistrationRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {password} = arg;
                if (GetValidationPassword(password)) return {
                    error: {
                        error: 'Bad password',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const result = await fetchWithBQ({
                    url: '/register/finish',
                    method: 'POST',
                    body: arg
                });

                const data = result.data as JWTSuccessAuthResponse;

                if (!data.token) return {
                    error: {
                        error: '',
                        status: 'CUSTOM_ERROR',
                    }
                };
                if (result.error) throw result.error;

                return {data};

            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setError} = registerSlice.actions;
                const {setAuth} = loginSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data.token) {
                        dispatch(setAuth(true));
                        localStorage.setItem('token', result?.data?.token);
                        localStorage.setItem('refreshToken', result?.data?.refreshToken);
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