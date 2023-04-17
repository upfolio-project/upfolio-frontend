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
            }
        }),
        editProfile: build.mutation<EditProfileSuccessResponse, EditProfileRequest>({
            query: (body) => ({
                url: '/profile/edit',
                method: 'POST',
                body: body
            })
        })
    }),
    overrideExisting: false
});

export const {useGetProfileQuery, useGetMeQuery, useEditProfileMutation} = Profile;