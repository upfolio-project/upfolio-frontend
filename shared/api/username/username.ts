import {commonApi} from "@/shared/api";
import type {
    GetMeRequest,
    GetMeSuccessResponse,
    GetProfileRequest,
    GetProfileSuccessResponse
} from "@/shared/api/entities";
import {getToken} from "@/shared/api/services/tokenServices";
import {userSlice} from "@/shared/store/userSlice/user";
import {ChangeUsernameRequest, ChangeUsernameSuccessResponse} from "@/shared/api/entities/username/username";


export const Username = commonApi.injectEndpoints({
    endpoints: build => ({
        getMe: build.query<GetMeSuccessResponse, GetMeRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                if (!getToken("token") && !getToken("refreshToken")) return {
                    error: {
                        error: '',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const result = await fetchWithBQ({
                    url: '/getMe',
                    method: 'GET'
                });

                const data = result.data as GetMeSuccessResponse;

                if (data) {
                    return {data};
                }
                return {error: {error: 'result.error.data', status: "CUSTOM_ERROR"}};
            },
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setUser} = userSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data) dispatch(setUser({userState: "login", me: result.data}));
                    else dispatch(setUser({userState: "notLogin"}));
                } catch (e: any) {
                    dispatch(setUser({userState: "notFetch"}));
                }
            }
        }),
        getByUsername: build.query<GetProfileSuccessResponse, GetProfileRequest>({
            query: (arg) => ({
                url: `/getByUsername/${arg.username}`,
                method: 'GET'
            }),
        }),
        changeUsername: build.mutation<ChangeUsernameSuccessResponse, ChangeUsernameRequest>({
            query: (arg) => ({
                url: "/changeUsername",
                method: "POST",
                body: arg
            })
        })
    }),
    overrideExisting: false
});

export const {useGetMeQuery, useGetByUsernameQuery, useChangeUsernameMutation} = Username;