import { h } from 'preact';
import calendar, { isSameDay, isSameMonth } from './helpers';

import style from './calendar.css';

interface CalendarDate {
  today: Date;
  current: Date;
  month: number;
  year: number;
  onDateChange: (e: MouseEvent) => void;
}

export const CalendarDate = ({ current, month, year, today, onDateChange }: CalendarDate) => (
  <div role="presentation" className={style.dateLabels} onMouseDown={onDateChange}>
    {calendar(month, year).map((d, index) => {
      const dateStr = d.join('-');

      const date = new Date(dateStr);

      // Check if calendar date is same day as today
      const isToday = isSameDay(date, today);

      // Check if calendar date is same day as currently selected date
      const isCurrent = isSameDay(date, current);

      // Check if calendar date is in the same month as the state month and year
      const inMonth = isSameMonth(date, new Date(`${year}-${month}-01`));

      return (
        <button
          type="button"
          // eslint-disable-next-line react/no-array-index-key
          key={`${year}-${month}-${index}`}
          data-date={dateStr}
          className={[
            !inMonth && style.notInMonth,
            isCurrent && style.currentDay,
            isToday && style.today,
            style.dateLabel
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {date.getDate()}
        </button>
      );
    })}
  </div>
);
