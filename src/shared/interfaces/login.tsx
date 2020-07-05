export interface LoginResponse {
    success: boolean;
    token?: string;
    userId?: string;
    registrationToken?: string;
}