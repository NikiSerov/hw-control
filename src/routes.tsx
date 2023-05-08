import { Groups } from './components/Groups/Groups';
import { Lessons } from './components/Lessons/Lessons';
import { Students } from './components/Students/Students';
import {
  GROUPS_ROUTE,
  LESSONS_ROUTE,
  STUDENTS_ROUTE,
} from './constants/routes';

export const routes = [
  {
    path: LESSONS_ROUTE,
    component: <Lessons />,
  },
  {
    path: STUDENTS_ROUTE,
    component: <Students />,
  },
  {
    path: GROUPS_ROUTE,
    component: <Groups />,
  },
];
