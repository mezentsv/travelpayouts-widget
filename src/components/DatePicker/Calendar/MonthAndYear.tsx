import { h } from 'preact';
import { CALENDAR_MONTHS, getNextMonth, getPreviousMonth } from './helpers';

import style from './calendar.css';

interface MonthAndYearProps {
  month: number;
  year: number;
  handleChange: (
    newValues: Partial<{
      today: Date;
      current: Date;
      month: number;
      year: number;
    }>
  ) => void;
}

export const MonthAndYear = ({ month, year, handleChange }: MonthAndYearProps) => {
  // Resolve the month name from the CALENDAR_MONTHS object map
  const monthname = CALENDAR_MONTHS[month - 1];

  const gotoPreviousMonth = () => handleChange(getPreviousMonth(month, year));

  const gotoNextMonth = () => handleChange(getNextMonth(month, year));

  const gotoPreviousYear = () => handleChange({ year: year - 1 });

  const gotoNextYear = () => handleChange({ year: year + 1 });

  const handlePrevious = (evt: MouseEvent | KeyboardEvent) => (evt.shiftKey ? gotoPreviousYear() : gotoPreviousMonth());

  const handleNext = (evt: MouseEvent | KeyboardEvent) => (evt.shiftKey ? gotoNextYear() : gotoNextMonth());

  return (
    <div className={style.monthPicker}>
      <button type="button" className={style.prevMonth} onClick={handlePrevious} title="Previous Month">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          className={style.monthArrow}
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <div className={style.monthYearLabel}>
        {monthname} {year}
      </div>
      <button type="button" className={style.nextMonth} onClick={handleNext} title="Next Month">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className={style.monthArrow}
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
