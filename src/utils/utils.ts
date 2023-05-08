import axios, { AxiosResponse } from "axios";

export const handleResponse = async <T>(res: Promise<AxiosResponse<T>>): Promise<[T | null, string | null]> => {
    try {
        const result = await res;
        return [result.data, null];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return [null, error.message];
        } else {
            return [null, 'An unexpected error occurred'];
        }
    }
};