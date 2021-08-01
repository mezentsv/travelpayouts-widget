import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import calendar, { isDate } from './helpers';
import { MonthAndYear } from './MonthAndYear';
import { DayLabels } from './DayLabels';
import { CalendarDate } from './CalendarDate';

import style from './calendar.css';

const resolveStateFromDate = (date: Date | null) => {
  const d = isDate(date) ? (date as Date) : new Date();
  return {
    current: d,
    month: d.getMonth() + 1,
    year: d.getFullYear()
  };
};

interface CalendarProps {
  date: Date | null;
  onDateChanged: (dateStr: string) => void;
  toggleCalendar: () => void;
}

export const Calendar = ({ date, onDateChanged, toggleCalendar }: CalendarProps) => {
  const [state, setState] = useState({ ...resolveStateFromDate(date), today: new Date() });
  const calendarRef = useRef<HTMLDivElement>(null);

  const checkClickOutside = (e: MouseEvent | KeyboardEvent) => {
    if (e.type === 'keydown' && 'key' in e && e.key === 'Escape') {
      return toggleCalendar();
    }

    if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
      toggleCalendar();
    }
  };

  const handleMonthAndYearChange = (newVals: Partial<typeof state>) => {
    console.log(newVals);
    setState((prevState) => ({ ...prevState, newVals }));
  };

  useEffect(() => {
    document.addEventListener('keydown', checkClickOutside, true);
    document.addEventListener('click', checkClickOutside, true);
    return () => {
      document.removeEventListener('keydown', checkClickOutside, true);
      document.removeEventListener('click', checkClickOutside, true);
    };
  }, []);

  const getCalendarDates = () => {
    const { current, month, year } = state;
    const calendarMonth = month || current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()

  const gotoDate = (e: Event) => {
    const date = (e.target as unknown as { dataset: { date: string } }).dataset.date;
    setState((prevState) => ({ ...prevState, ...resolveStateFromDate(new Date(date)) }));
    onDateChanged(date);
  };

  return (
    <div className={style.calendar}>
      <div ref={calendarRef}>
        <MonthAndYear month={state.month} year={state.year} handleChange={setState} />
        <DayLabels />
        <CalendarDate {...state} onDateChange={gotoDate} />
      </div>
    </div>
  );
};
