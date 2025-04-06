export interface IApiResponse<T> {
    successResult: T | null;
    message?: string;
    code?: number;
    errors?: [
        {
            path: string[];
            message: string;
            code: number;
        }
    ];
}