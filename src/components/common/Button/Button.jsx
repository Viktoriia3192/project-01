import clsx from 'clsx';
import sprite from '../../../images/sprite.svg';
import s from './Button.module.css';

const Button = ({ type = 'button', title, className, onClick, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className)}
      {...rest}
    >
      <svg className={s.svg}>
        <use href={`${sprite}#icon-plus-circle`}></use>
      </svg>
      {title}
    </button>
  );
};

export default Button;
