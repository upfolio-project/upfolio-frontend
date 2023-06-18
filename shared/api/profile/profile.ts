import {commonApi} from "@/shared/api";
import type {
    GetProfileRequest,
    GetProfileSuccessResponse
} from "@/shared/api/entities";


export const Profile = commonApi.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<GetProfileSuccessResponse, GetProfileRequest>({
            query: (arg) => ({
                url: `/profile/user/${arg.username}`,
                method: 'GET'
            }),
        }),
    }),
    overrideExisting: false
});

export const {useGetProfileQuery} = Profile;