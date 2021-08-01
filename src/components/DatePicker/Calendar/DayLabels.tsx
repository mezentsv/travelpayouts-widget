import { h } from 'preact';
import { WEEK_DAYS } from './helpers';

import style from './calendar.css';

export const DayLabels = () => (
  // Resolve the day of the week label from the WEEK_DAYS object map
  // const daylabel = WEEK_DAYS[day].toUpperCase();
  <div className={style.dayLabels}>
    {WEEK_DAYS.map((day) => (
      <div key={day} className={style.dayLabel}>
        {day.toUpperCase()}
      </div>
    ))}
  </div>
);
