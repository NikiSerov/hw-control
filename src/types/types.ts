export interface Student {
    firstname: string;
    lastname: string;
    id: string;
    groups?: string[];
}

export interface StudentControl {
    [key: string]: [boolean, boolean];
}

export type StudentsControl = StudentControl[];

export interface Lesson {
    title: string;
    group_id: string;
    date: string;
    homework: string;
    id: string;
    is_active: boolean;
    control: StudentsControl;
    students: Student[];
}

export interface Group {
    id: string;
    title: string;
}

export type CalendarData = Array<{ [key: string]: boolean }>