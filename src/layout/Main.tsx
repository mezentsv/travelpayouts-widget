import { h } from 'preact';
import style from './main.css';
import { useContext, useState } from 'preact/hooks';
import { ConfigContext, GlobalsContext } from 'AppContext';
import clsx from 'clsx';

import { Button } from 'components/Button';
import { DatePicker } from 'components/DatePicker';

const Main = () => {
  const config = useContext(ConfigContext);
  const { widgetOpen } = useContext(GlobalsContext);

  return (
    <div className={clsx(style.root, { [style.noDark]: config.disableDarkMode })}>
      <h1 className={style.title}>Where does it come from? Why do we use it?</h1>
      <p class={style.description}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout.
      </p>
      <DatePicker name="depart-date" placeholder="Depart date" onChange={(val, date) => console.log(val, date)} />
      <Button onClick={() => console.log('click')}>SEARCH</Button>
    </div>
  );
};

export default Main;
