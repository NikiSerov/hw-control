import { Lesson, StudentsControl } from "../types/types";
import { handleResponse } from "../utils/utils";
import { instance } from "./api";

export const getLesson = async (date: string) => {
    return await handleResponse<Lesson>(instance.get(`/lessons/${date}`));
}

export const createLesson = async (title: string, group_id: string, date: string, homework: string) => {
    return await handleResponse<{ detail: string }>(instance.post('/lessons/create', {
        title,
        group_id,
        date,
        homework,
    }));
}

export const finishLesson = async (date: string, studentsControl: StudentsControl) => {
    return await handleResponse<Lesson>(instance.put(`/lessons/${date}`, {
        studentsControl
    }));
}