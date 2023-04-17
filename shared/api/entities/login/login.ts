export interface AuthorizeByPasswordRequest {
    phoneNumber: string
    password: string
}

export interface AuthorizeByPasswordSuccessResponse {
    timestamp: string
    token: string
    refreshToken: string
}

