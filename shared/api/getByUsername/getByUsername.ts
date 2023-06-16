import {commonApi} from "@/shared/api";
import type {
    EditProfileRequest,
    EditProfileSuccessResponse,
    GetMeRequest,
    GetMeSuccessResponse,
    GetProfileRequest,
    GetProfileSuccessResponse
} from "@/shared/api/entities";

export const GetByUsername = commonApi.injectEndpoints({
    endpoints: build => ({
        getByUsername: build.query<GetProfileSuccessResponse, GetProfileRequest>({
            query: (arg) => ({
                url: `/getByUsername/${arg.username}`,
                method: 'GET'
            }),
        }),
    }),
    overrideExisting: false
});

export const {useGetByUsernameQuery} = GetByUsername;