export interface IAuthService {
    logout(): void;
    refreshToken(): Promise<void>;
}