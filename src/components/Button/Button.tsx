import { h, ComponentChildren } from 'preact';
import style from './button.css';

interface ButtonProps {
  color?: string;
  children?: ComponentChildren;
  onClick: () => void;
}
export const Button = ({ color, children, onClick }: ButtonProps) => {
  return (
    <button
      className={[style.button, 'layout-btn'].join(' ')}
      onClick={onClick}
      style={{
        backgroundColor: color
      }}
    >
      {children}
    </button>
  );
};
