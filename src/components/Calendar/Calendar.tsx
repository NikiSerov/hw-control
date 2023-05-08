import { FC } from 'react';
import s from './Calendar.module.scss';
import DatePicker from 'react-datepicker';

export const Calendar: FC = () => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className={s.calendarWrapper}>
      <DatePicker onChange={handleChange} />
    </div>
  );
};
