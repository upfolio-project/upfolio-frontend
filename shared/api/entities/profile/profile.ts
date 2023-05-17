export type ProfileModelType = 'PUBLIC' | 'PRIVATE' | 'CONTACTS_HIDDEN' | 'CONTACTS_FOR_COMPANIES'

export enum ProfileModelStatus {
    LOOKING_FOR_JOB = "LOOKING_FOR_JOB",
    FOUND_JOB = "FOUND_JOB",
    NOT_LOOKING_FOR_JOB = "NOT_LOOKING_FOR_JOB",
}


export interface UserRealNameModel {
    firstName: string
    lastName: string
}

export interface ProfileModel {
    userUuid: string
    username: string
    realName: UserRealNameModel
    registered: string
    type: ProfileModelType
    profilePhotoUrl: string
    verified: boolean
    dateOfBirth: string
    status: ProfileModelStatus
    bio: string
    tags: string[]
    location: string
}


export interface GetMeRequest {

}

export interface GetMeSuccessResponse {
    timestamp: string
    username: string
    url: string
}


export interface GetProfileRequest {
    username: string
}

export interface GetProfileSuccessResponse {
    timestamp: string
    profile: ProfileModel
}


export interface EditProfileRequest {
    username: string
    realName: UserRealNameModel
    type: ProfileModelType
    status: ProfileModelStatus
    bio: string
    tags: string[]
    dateOfBirth: string | null
    location: string | null
}

export interface EditProfileSuccessResponse extends GetProfileSuccessResponse {

}
