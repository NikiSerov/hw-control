import { FC } from 'react';
import s from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={s.logoWrapper}>
      <span className={s.logo}>
        HW<span className={s.underLine}>_</span>C
      </span>
    </div>
  );
};
