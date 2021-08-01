import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { formatDate } from './helpers';
import { Calendar, getDateISO } from './Calendar';

import style from './datepicker.css';

interface DatePickerProps {
  name: string;
  placeholder: string;
  value?: string;
  onChange: (name: string, date: string) => void;
}

export const DatePicker = ({ name, value, placeholder, onChange }: DatePickerProps) => {
  const [date, setDate] = useState<string>();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setCalendarOpen((prevState) => !prevState);
  };

  const handleDateChange = (dateStr: string) => {
    setDate(dateStr);
    toggleCalendar();
    onChange(name, dateStr);
  };

  useEffect(() => {
    value && setDate(getDateISO(new Date(value)));
  }, [value]);

  return (
    <div className={style.dpd}>
      <input type="text" value={formatDate(date)} readOnly={true} placeholder={placeholder} onClick={toggleCalendar} />
      {calendarOpen && (
        <Calendar
          date={date ? new Date(date) : undefined}
          onDateChanged={handleDateChange}
          toggleCalendar={toggleCalendar}
        />
      )}
    </div>
  );
};
