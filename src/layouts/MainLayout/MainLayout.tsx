import { FC } from 'react';
import s from './MainLayout.module.scss';
import { Header } from '../../components/Header/Header';
import { ContentLayout } from '../ContentLayout/ContentLayout';
import { Calendar } from '../../components/Calendar/Calendar';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';

export const MainLayout: FC = () => {
  return (
    <div className={s.mainLayout}>
      <Header />
    </div>
  );
};
