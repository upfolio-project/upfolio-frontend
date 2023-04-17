import {
    RegisterTokenRequest,
    RegisterTokenSuccessResponse,

    RegisterByPhoneNumberRequest,
    RegisterByPhoneNumberSuccessResponse,

    ConfirmPhoneOTPRequest,
    ConfirmPhoneOTPSuccessResponse,

    FinishRegistrationRequest,
    FinishRegistrationSuccessResponse
} from "./register/register";

type ProfileModelType = 'PUBLIC' | 'PRIVATE' | 'CONTACTS_HIDDEN' | 'CONTACTS_FOR_COMPANIES'

export enum ProfileModelStatus {
    LOOKING_FOR_JOB = "LOOKING_FOR_JOB",
    FOUND_JOB = "FOUND_JOB",
    NOT_LOOKING_FOR_JOB = "NOT_LOOKING_FOR_JOB",
}

export interface AuthorizeByPasswordRequest {
    phoneNumber: string
    password: string
}

export interface GetMeResponse {
    timestamp: string
    username: string
    url: string
}

export interface UserRealNameModel {
    firstName: string
    lastName: string
}

export interface ProfileModel {
    username: string
    realName: UserRealNameModel
    dateOfBirth: string
    profilePhotoUrl: string
    type: ProfileModelType
    registered: string
    status: ProfileModelStatus
    bio: string
    tags: string[]
    verified: boolean
}

export interface GetProfileResponse {
    timestamp: string
    profile: ProfileModel
}

export interface EditProfileModel {
    username: string
    realName: UserRealNameModel
    type: ProfileModelType
    status: ProfileModelStatus
    bio: string
    tags: string[]
    dateOfBirth: string | null
}

export type {
    RegisterTokenRequest,
    RegisterTokenSuccessResponse,

    RegisterByPhoneNumberRequest,
    RegisterByPhoneNumberSuccessResponse,

    ConfirmPhoneOTPRequest,
    ConfirmPhoneOTPSuccessResponse,

    FinishRegistrationRequest,
    FinishRegistrationSuccessResponse,

};
