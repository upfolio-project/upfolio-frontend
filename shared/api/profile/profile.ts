import {commonApi} from "@/shared/api";
import type {
    EditProfileRequest,
    EditProfileSuccessResponse,
    GetMeRequest,
    GetMeSuccessResponse,
    GetProfileRequest,
    GetProfileSuccessResponse
} from "@/shared/api/entities";
import {getToken} from "@/shared/api/services/tokenServices";
import {userSlice} from "@/shared/store/userSlice/user";


export const Profile = commonApi.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<GetProfileSuccessResponse, GetProfileRequest>({
            query: (arg) => ({
                url: `/profile/user/${arg.username}`,
                method: 'GET'
            }),
        }),
        getMe: build.query<GetMeSuccessResponse, GetMeRequest>({
            queryFn: async (arg, api, extraOptions, fetchWithBQ) => {
                if (!getToken("token") && !getToken("refreshToken")) return {
                    error: {
                        error: '',
                        status: 'CUSTOM_ERROR'
                    }
                };

                const result = await fetchWithBQ({
                    url: '/profile/getMe',
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
        editProfile: build.mutation<EditProfileSuccessResponse, EditProfileRequest>({
            query: (body) => ({
                url: '/profile/edit',
                method: 'POST',
                body: body
            }),
            async onQueryStarted(data, {queryFulfilled, dispatch}) {
                const {setUser} = userSlice.actions;
                try {
                    const result = await queryFulfilled;
                    if (result.data) dispatch(setUser({
                        userState: "login",
                        me: {
                            timestamp: result.data.timestamp,
                            username: result.data.profile.username,
                            url: `https://upfolio.ru/${result.data.profile.username}`
                        }
                    }));
                    else dispatch(setUser({userState: "notLogin"}));
                } catch (e: any) {
                    dispatch(setUser({userState: "notFetch"}));
                }
            }
        })
    }),
    overrideExisting: false
});

export const {useGetProfileQuery, useGetMeQuery, useEditProfileMutation} = Profile;