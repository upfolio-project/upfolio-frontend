import {commonApi} from "@/shared/api";
import type {
    GetMeRequest,
    GetMeSuccessResponse,

    GetProfileRequest,
    GetProfileSuccessResponse,

    EditProfileRequest,
    EditProfileSuccessResponse
} from "@/shared/api/entities";

export const Profile = commonApi.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<GetProfileSuccessResponse, GetProfileRequest>({
            query: (arg) => ({
                url: `/profile/${arg.username}`,
                method: 'GET'
            }),
        }),
        getMe: build.query<GetMeSuccessResponse, GetMeRequest>({
            query: () => ({
                url: '/profile/getMe',
                method: 'GET'
            })
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