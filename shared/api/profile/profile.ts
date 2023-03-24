import {commonApi} from "@/shared/api";
import {EditProfileModel, GetMeResponse, GetProfileResponse} from "@/shared/api/entities";

export const Profile = commonApi.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<GetProfileResponse, { username: string }>({
            query: (arg) => ({
                url: `/profile/${arg.username}`,
                method: 'GET'
            }),
        }),
        getMe: build.query<GetMeResponse, {}>({
            query: () => ({
                url: '/profile/getMe',
                method: 'GET'
            })
        }),
        editProfile: build.mutation<GetProfileResponse, EditProfileModel>({
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