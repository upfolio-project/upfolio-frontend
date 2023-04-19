export interface RegisterTokenRequest {
}

export interface RegisterTokenSuccessResponse {
    timestamp: string
    token: string
}


export interface RegisterByPhoneNumberRequest {
    registerToken: string
    phoneNumber: string
}

export interface RegisterByPhoneNumberSuccessResponse {
    timestamp: string
    success: boolean
    confirmationMethod: "SMS" | "CALL"
    phoneNumber: string
}


export interface ConfirmPhoneOTPRequest {
    registerToken: string
    code: string
}

export interface ConfirmPhoneOTPSuccessResponse {
    timestamp: string
    success: boolean
}


export interface FinishRegistrationRequest {
    registerToken: string
    firstName: string
    lastName: string
    password: string
}

export interface FinishRegistrationSuccessResponse {
    timestamp: string
    token: string
    refreshToken: string
}
