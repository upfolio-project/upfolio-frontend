export interface FinishRegistrationRequest {
    username: string,
    password: string
}

export interface JWTSuccessAuthResponse {
    token: string
    refreshToken: string
}

export interface AuthorizeByPasswordRequest {
    phoneNumber: string
    password: string
}

export interface ConfirmPhoneOTPRequest {
    code: string
}

export interface SuccessResponse {
    timestamp: string
    success: boolean
}

export interface RegisterByPhoneNumberRequest {
    phoneNumber: string
}