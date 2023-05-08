import { defaultLimit } from "../constants/constants";
import { Group } from "../types/types";
import { handleResponse } from "../utils/utils";
import { instance } from "./api";

export const getGroups = async (queryString = "") => {
    const qs = !!queryString ? `&${queryString}` : queryString;
    return await handleResponse<Group[]>(instance.get(`/groups/?limit=${defaultLimit}${qs}`));
};

export const createGroup = async (id: string, title: string) => {
    return await handleResponse<Group>(instance.post('/groups/create', {
        id,
        title,
    }))
}