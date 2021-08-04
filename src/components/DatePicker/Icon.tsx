import { h } from 'preact';

import style from './datepicker.css';

interface IconProps {
  type: 'calendar' | 'clear';
  color: string;
  onClick: (type: 'clear' | 'calendar') => void;
}

export const Icon = ({ type, color, onClick }: IconProps) => {
  return (
    <button type="button" className={style.icon} onClick={() => onClick(type)}>
      {type === 'calendar' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="15px"
          height="17px"
          viewBox="0 0 15 17"
          version="1.1"
        >
          <title>Calendar</title>
          <defs />
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill={color}>
              <g id="Wide-form" transform="translate(50.000000, 200.000000)">
                <g id="Input2" transform="translate(260.000000, 75.000000)">
                  <path
                    d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z"
                    id="Calendar"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      ) : (
        type === 'clear' && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
              fill={color}
              transform="scale(1.2), translate(-4, -4)"
              d="M7.05022 7.05028C6.65969 7.4408 6.65969 8.07397 7.05022 8.46449L10.5858 12L7.05023 15.5356C6.6597 15.9261 6.6597 16.5593 7.05023 16.9498C7.44075 17.3403 8.07392 17.3403 8.46444 16.9498L12 13.4142L15.5355 16.9498C15.926 17.3403 16.5592 17.3403 16.9497 16.9498C17.3402 16.5592 17.3402 15.9261 16.9497 15.5356L13.4142 12L16.9497 8.46449C17.3402 8.07397 17.3402 7.4408 16.9497 7.05028C16.5592 6.65976 15.926 6.65976 15.5355 7.05028L12 10.5858L8.46443 7.05028C8.07391 6.65975 7.44074 6.65975 7.05022 7.05028Z"
            />
          </svg>
        )
      )}
    </button>
  );
};
