import clsx from 'clsx';
import { Link } from 'react-router-dom';
import s from './LinkButton.module.css';

const LinkButton = ({ title, className, to }) => {
  return (
    <Link to={to} className={clsx(s.link, className && className)}>
      {title}
    </Link>
  );
};

export default LinkButton;
