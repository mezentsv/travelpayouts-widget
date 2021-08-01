import { h } from 'preact';
import style from './main.css';
import { useEffect, useRef, useState } from 'preact/hooks';
import { useAppContext } from 'AppContext';
import { getLayoutTag, INPUTS_BP } from './helpers/getLayoutTag';
import { Button } from 'components/Button';
import { DatePicker, dpName } from 'components/DatePicker';
import getStylesFromConfig from './helpers/getStyles';

const getAviasalesLink = (dateFrom: string, dateTo: string) => {
  return `https://www.aviasales.ru/?depart_date=${dateFrom}&destination=HKT&origin=MOW&return_date=${dateTo}`;
};

const Main = () => {
  const config = useAppContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [dates, setDates] = useState({ 'depart-date': '', 'return-date': '' });

  console.log(config.palette);

  const onResize = () => {
    setWidth(containerRef.current!.offsetWidth);
  };

  const onSearch = () => {
    const { 'return-date': dateTo, 'depart-date': dateFrom } = dates;
    const ticketSearchQuery = getAviasalesLink(dateFrom, dateTo);
    window.open(ticketSearchQuery, '_blank');
  };

  const onDateChange = (name: dpName, date: string) => {
    setDates((prevState) => ({ ...prevState, [name]: date }));
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      className={[style.root, getLayoutTag(width, INPUTS_BP)].filter(Boolean).join(' ')}
      ref={containerRef}
      style={getStylesFromConfig(config) as h.JSX.CSSProperties}
    >
      <h1 className={style.title}>Where does it come from? Why do we use it?</h1>
      <div className={style.widgetGrid}>
        <p class={style.description}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
        <DatePicker name="depart-date" placeholder="Depart date" onChange={onDateChange} />
        <DatePicker name="return-date" placeholder="Return date" onChange={onDateChange} />
        <Button onClick={onSearch}>SEARCH</Button>
      </div>
    </div>
  );
};

export default Main;
