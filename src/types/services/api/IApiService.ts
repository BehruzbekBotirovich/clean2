import type { IApiResponse } from "./IApiResponse";

export interface IApiService {
    sendRequest<T>(url: string, method: string, data?: any, params?: any, headers?: any): Promise<IApiResponse<T>>
} 