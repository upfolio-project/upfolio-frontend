export type ProfileModelType = 'PUBLIC' | 'PRIVATE' | 'CONTACTS_HIDDEN' | 'CONTACTS_FOR_COMPANIES'

export enum ProfileModelStatus {
    LOOKING_FOR_JOB = "LOOKING_FOR_JOB",
    FOUND_JOB = "FOUND_JOB",
    NOT_LOOKING_FOR_JOB = "NOT_LOOKING_FOR_JOB",
}


export interface UserRealNameModel {
    firstName: string;
    lastName: string;
}

export interface ProfileModel {
    userUuid: string;
    username: string;
    realName: UserRealNameModel;
    registered: string;
    type: ProfileModelType;
    profilePhotoUrl: string;
    verified: boolean;
    dateOfBirth: string;
    status: ProfileModelStatus;
    bio: string;
    tags: string[];
    location: string;
}

export interface OrganizationModel {
    userUuid: string;
    profilePhotoUrl: string;
    verified: boolean;
    registered: string;
    details: OrganizationBasicDetails;
    bio: string;
    location: string;
}

interface OrganizationBasicDetails {
    organizationName: string;
    legalEntityName: string;
}


export interface GetMeRequest {

}

export interface GetMeSuccessResponse {
    timestamp: string;
    username: string;
    url: string;
}


export interface GetProfileRequest {
    username: string;
}

export enum UserType {
    SPECIALIST = "SPECIALIST",
    ORGANIZATION = "ORGANIZATION"
}

interface GetProfileSuccessResponseBase {
    timestamp: string;
    username: string;
    userUuid: string;
}

interface GetSpecialistSuccessResponse extends GetProfileSuccessResponseBase {
    userType: UserType.SPECIALIST;
    specialist: ProfileModel
}

interface GetOrganizationSuccessResponse extends GetProfileSuccessResponseBase {
    userType: UserType.ORGANIZATION;
    organization: OrganizationModel;
}

export type GetProfileSuccessResponse = GetSpecialistSuccessResponse | GetOrganizationSuccessResponse;

export interface EditProfileRequest {
    username: string;
    realName: UserRealNameModel;
    type: ProfileModelType;
    status: ProfileModelStatus;
    bio: string;
    tags: string[];
    dateOfBirth: string | null;
    location: string | null;
}

export interface EditProfileSuccessResponse {
    timestamp: string;
    profile: ProfileModel;
}
