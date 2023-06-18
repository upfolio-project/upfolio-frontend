export interface ChangeUsernameRequest {
    newUsername: string;
}

export interface ChangeUsernameSuccessResponse {
    timestamp: string;
    success: true;
}