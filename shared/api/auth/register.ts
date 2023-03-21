import {commonApi} from "@/shared/api";
import {
    ConfirmPhoneOTPRequest, FinishRegistrationRequest,
    JWTSuccessAuthResponse,
    RegisterByPhoneNumberRequest,
    SuccessResponse
} from "@/shared/api/entities";
import {
    GetValidationCode,
    GetValidationPassword,
    GetValidationPhone,
    GetValidationUsername
} from "@/shared/api/services/getValidation";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {registerSlice} from "@/shared/store/authSlice/register";
import {loginSlice} from "@/shared/store/authSlice/login";

export const Register = commonApi.injectEndpoints({
    endpoints: build => ({
        commenceByPhoneNumber: build.mutation<SuccessResponse, RegisterByPhoneNumberRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {phoneNumber} = arg;
                if (GetValidationPhone(phoneNumber)) return {
                    error: {
                        error: 'Bad phone',
                        status: 'CUSTOM_ERROR',
                    }
                };
                const result = await fetchWithBQ({
                    url: '/register/phoneNumber',
                    method: 'POST',
                    body: arg
                });

                const data = result.data as SuccessResponse;

                if (data?.success) return {
                    error: {
                        error: '',
                        status: 'CUSTOM_ERROR',
                    }
                };
                if (result.error) throw result.error;

                return {data};
            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setStep, setError} = registerSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data.success && result.data.timestamp) {
                        dispatch(setStep(1));
                    }
                } catch (e: any) {
                    const error: string = e?.error?.error;
                    dispatch(setError(GetErrorDescription(error)));
                }
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
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setError, setStep} = registerSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data.success && result.data.timestamp) {
                        dispatch(setStep(2));
                    }
                } catch (e: any) {
                    const error: string = e?.error?.error;
                    dispatch(setError(GetErrorDescription(error)));
                }
            },
            invalidatesTags: []
        }),
        finish: build.mutation<JWTSuccessAuthResponse, FinishRegistrationRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {password, username} = arg;
                if (GetValidationPassword(password)) return {
                    error: {
                        error: 'Bad password',
                        status: 'CUSTOM_ERROR'
                    }
                };
                if (GetValidationUsername(username)) return {
                    error: {
                        error: 'Bad username',
                        status: 'CUSTOM_ERROR'
                    }
                };
                const result = await fetchWithBQ({
                    url: '/register/finish',
                    method: 'POST',
                    body: arg
                });
                const data = result.data as JWTSuccessAuthResponse;
                if (!data.refreshToken || !data.token) return {
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
                    if (result.data.token && result.data.refreshToken) {
                        dispatch(setAuth(true));
                        localStorage.setItem('token', result?.data?.token);
                        localStorage.setItem('refreshToken', result?.data?.refreshToken);
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

export const {useCommenceByPhoneNumberMutation} = Register;