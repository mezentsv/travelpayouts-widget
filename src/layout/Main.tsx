import { h } from 'preact';
import style from './main.css';
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { ConfigContext, GlobalsContext } from 'AppContext';
import { getLayoutTag, INPUTS_BP } from './helper';
import { Button } from 'components/Button';
import { DatePicker } from 'components/DatePicker';

const Main = () => {
  const config = useContext(ConfigContext);
  const { widgetOpen } = useContext(GlobalsContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onResize = () => {
    setWidth(containerRef.current!.offsetWidth);
  };

  return (
    <div className={[style.root, getLayoutTag(width, INPUTS_BP)].filter(Boolean).join(' ')} ref={containerRef}>
      <h1 className={style.title}>Where does it come from? Why do we use it?</h1>
      <div className={style.widgetGrid}>
        <p class={style.description}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
        <DatePicker name="depart-date" placeholder="Depart date" onChange={(val, date) => console.log(val, date)} />
        <DatePicker name="return-date" placeholder="Return date" onChange={(val, date) => console.log(val, date)} />
        <Button onClick={() => console.log('click')}>SEARCH</Button>
      </div>
    </div>
  );
};

export default Main;
