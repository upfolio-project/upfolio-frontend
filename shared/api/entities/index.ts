type ProfileModelType = 'PUBLIC' | 'PRIVATE' | 'CONTACTS_HIDDEN' | 'CONTACTS_FOR_COMPANIES'
type ProfileModelStatus = 'LOOKING_FOR_JOB' | 'FOUND_JOB' | 'NOT_LOOKING_FOR_JOB'

export interface FinishRegistrationRequest {
    registerToken: string
    firstName: string
    lastName: string
    password: string
}

export interface JWTSuccessAuthResponse {
    timestamp: string
    token: string
    refreshToken: string
}

export interface RegisterTokenSuccessResponse {
    token: string
    timestamp: string
}

export interface RegisterTokenRequest {}

export interface AuthorizeByPasswordRequest {
    phoneNumber: string
    password: string
}

export interface ConfirmPhoneOTPRequest {
    registerToken: string
    code: string
}

export interface SuccessResponse {
    timestamp: string
    success: boolean
}

export interface RegisterByPhoneNumberRequest {
    registerToken: string
    phoneNumber: string
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