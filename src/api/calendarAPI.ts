import { CalendarData } from "../types/types";
import { handleResponse } from "../utils/utils";
import { instance } from "./api";

export const getCalendarData = async (year: string, month: string) => {
    return await handleResponse<CalendarData>(instance.get(`/calendar/?year=${year}&month=${month}`));
};
