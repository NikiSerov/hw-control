import { FC } from 'react';
import s from './MainLayout.module.scss';
import { Header } from '../../components/Header/Header';
import { ContentLayout } from '../ContentLayout/ContentLayout';
import { Calendar } from '../../components/Calendar/Calendar';
import { Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <div className={s.mainLayout}>
      <Header />
      <ContentLayout>
        <Calendar />
        <div className={s.mainComp}>
          <Outlet />
        </div>
      </ContentLayout>
    </div>
  );
};
