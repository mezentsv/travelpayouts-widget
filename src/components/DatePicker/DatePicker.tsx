import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { formatDate } from './helpers';
import { Calendar, getDateISO } from './Calendar';
import { Icon } from './Icon';

import style from './datepicker.css';

interface DatePickerProps {
  name: string;
  placeholder: string;
  value?: string;
  onChange: (name: string, date: string) => void;
}

export const DatePicker = ({ name, value, placeholder, onChange }: DatePickerProps) => {
  const [date, setDate] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  console.log(date);
  const toggleCalendar = () => {
    setCalendarOpen((prevState) => !prevState);
  };

  const handleDateChange = (dateStr: string) => {
    setDate(dateStr);
    toggleCalendar();
    onChange(name, dateStr);
  };

  const handleIconClick = (type: 'clear' | 'calendar') => {
    if (type === 'calendar') {
      toggleCalendar();
    } else {
      setDate(null);
    }
  };

  useEffect(() => {
    value && setDate(getDateISO(new Date(value)));
  }, [value]);

  return (
    <div className={style.dpd}>
      <input type="text" value={formatDate(date)} readOnly={true} placeholder={placeholder} onClick={toggleCalendar} />
      <Icon color="#4a90e2" onClick={handleIconClick} type={date ? 'clear' : 'calendar'} />
      {calendarOpen && (
        <Calendar
          date={date ? new Date(date) : null}
          onDateChanged={handleDateChange}
          toggleCalendar={toggleCalendar}
        />
      )}
    </div>
  );
};
