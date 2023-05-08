import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { routes } from './routes';

export const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.component}
                index={route.index}
                key={route.path}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
};
