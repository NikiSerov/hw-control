import { FC } from 'react';
import s from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={s.logoWrapper}>
      <span className={s.logo}>HWC</span>
    </div>
  );
};
