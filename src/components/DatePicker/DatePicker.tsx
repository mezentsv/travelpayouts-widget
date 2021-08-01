import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { formatDate } from './helpers';
import { Calendar, getDateISO } from './Calendar';
import { Icon } from './Icon';

import style from './datepicker.css';

export type dpName = 'depart-date' | 'return-date';

interface DatePickerProps {
  name: dpName;
  placeholder: string;
  value?: string;
  onChange: (name: dpName, date: string) => void;
}

export const DatePicker = ({ name, value, placeholder, onChange }: DatePickerProps) => {
  const [date, setDate] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
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
      onChange('depart-date', '');
      onChange('return-date', '');
    }
  };

  useEffect(() => {
    value && setDate(getDateISO(new Date(value)));
  }, [value]);

  return (
    <div className={[style.dpd, 'layout-dpd'].join(' ')}>
      <div className={style.inputContainer}>
        <input
          type="text"
          value={formatDate(date)}
          readOnly={true}
          placeholder={placeholder}
          onClick={toggleCalendar}
        />
        <Icon color="var(--color-primary-1)" onClick={handleIconClick} type={date ? 'clear' : 'calendar'} />
      </div>
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
