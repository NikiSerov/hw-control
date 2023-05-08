import { defaultLimit } from "../constants/constants";
import { Student } from "../types/types";
import { handleResponse } from "../utils/utils";
import { instance } from "./api";

export const getStudents = async (queryString = "") => {
    const qs = !!queryString ? `&${queryString}` : queryString;
    return await handleResponse<Student[]>(instance.get(`/lessons/?limit=${defaultLimit}${qs}`));
}

export const createStudent = async (firstname: string, lastname: string, groups: string[]) => {
    return await handleResponse<Student>(instance.post('/students/create', {
        firstname,
        lastname,
        groups,
    }));
}