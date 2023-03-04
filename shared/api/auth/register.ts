import {commonApi} from "@/shared/api";
import {RegisterByPhoneNumberRequest, SuccessResponse} from "@/shared/api/entities";
import {GetValidationPhone} from "@/shared/api/services/getValidation";
import GetErrorDescription from "@/shared/api/services/getErrorDescription";
import {registerSlice} from "@/shared/store/authSlice/register";

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
                    url: '/v1/register/phoneNumber',
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
        })
    })
});

export const {useCommenceByPhoneNumberMutation} = Register;