import { WEEK_DAYS } from './Calendar';

export function formatDate(dateStr: string | null) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return `${WEEK_DAYS[date.getDay()]}, ${date.toDateString().split(' ')[1]} ${date.getDate()}`;
}
