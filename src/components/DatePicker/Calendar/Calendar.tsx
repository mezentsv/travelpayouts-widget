import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { isDate } from './helpers';
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
      return toggleCalendar();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', checkClickOutside, true);
    document.addEventListener('click', checkClickOutside, true);
    return () => {
      document.removeEventListener('keydown', checkClickOutside, true);
      document.removeEventListener('click', checkClickOutside, true);
    };
  }, []);

  // Render a calendar date as returned from the calendar builder function
  // This method is used as a map callback as seen in render()

  const gotoDate = (e: Event) => {
    const {
      dataset: { date }
    } = e.target as unknown as { dataset: { date: string } };

    setState((prevState) => ({ ...prevState, ...resolveStateFromDate(new Date(date)) }));
    onDateChanged(date);
  };

  return (
    <div className={[style.calendar, 'layout-calendar'].join(' ')}>
      <div ref={calendarRef}>
        <MonthAndYear month={state.month} year={state.year} handleChange={setState} />
        <DayLabels />
        <CalendarDate {...state} onDateChange={gotoDate} />
      </div>
    </div>
  );
};
