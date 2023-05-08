import { FC } from 'react';
import s from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import {
  GROUPS_ROUTE,
  LESSONS_ROUTE,
  STUDENTS_ROUTE,
} from '../../constants/routes';

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <Logo />
      <nav className={s.nav}>
        <Link to={LESSONS_ROUTE} className={s.nav__link}>
          <span className={s.slash}>/</span>
          <span className={s.nav__linkName}>lessons</span>
        </Link>
        <Link to={STUDENTS_ROUTE} className={s.nav__link}>
          <span className={s.slash}>/</span>
          <span className={s.nav__linkName}>students</span>
        </Link>
        <Link to={GROUPS_ROUTE} className={s.nav__link}>
          <span className={s.slash}>/</span>
          <span className={s.nav__linkName}>groups</span>
        </Link>
      </nav>
    </div>
  );
};
