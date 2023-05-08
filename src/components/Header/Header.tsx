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
        <Link to={LESSONS_ROUTE} className={s.nav__link} />
        <Link to={STUDENTS_ROUTE} className={s.nav__link} />
        <Link to={GROUPS_ROUTE} className={s.nav__link} />
      </nav>
    </div>
  );
};
