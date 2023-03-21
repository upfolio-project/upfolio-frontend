import {commonApi} from "@/shared/api";
import {AuthorizeByPasswordRequest, JWTSuccessAuthResponse} from "@/shared/api/entities";
import {loginSlice} from "@/shared/store/authSlice/login";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {GetValidationPassword, GetValidationPhone} from "@/shared/api/services/getValidation";

export const Login = commonApi.injectEndpoints({
    endpoints: build => ({
        loginByPassword: build.mutation<JWTSuccessAuthResponse, AuthorizeByPasswordRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                const {phoneNumber, password} = arg;
                const phone = '7' + phoneNumber.split('').map(value => value == '-' ? '' : value).join('');
                if (GetValidationPassword(password)) return {
                    error: {
                        error: 'Bad password',
                        status: 'CUSTOM_ERROR'
                    }
                };
                if (GetValidationPhone(phone)) return {
                    error: {
                        error: 'Bad phone',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const body = {password: password, phoneNumber: phone};
                const result = await fetchWithBQ({
                    url: '/authorize/byPassword',
                    method: 'POST',
                    body,
                });
                const error: any = result?.error?.data;
                if (result.error) return {
                    error: {
                        error: error,
                        status: 'CUSTOM_ERROR'
                    }
                };

                const data = result.data as JWTSuccessAuthResponse;

                return {data};
            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setAuth, setError} = loginSlice.actions;
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('token', result?.data?.token);
                    localStorage.setItem('refreshToken', result?.data?.refreshToken);
                    dispatch(setAuth(true));
                } catch (e: any) {
                    const error: string = e?.error?.error?.text || e?.error?.error;
                    dispatch(setError(GetErrorDescription(error)));
                }
            },
            invalidatesTags: []
        }),
    }),
    overrideExisting: false,
});

export const {useLoginByPasswordMutation} = Login;