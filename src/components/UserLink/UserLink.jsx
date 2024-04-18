import css from './UserLink.module.css';
import userLogo from '../../../public/outline.png';
import { Link } from 'react-router-dom';
const UserLink = () => {
  return (
    <Link to="/signin">
      <div className={css.userAuthContainer}>
        Sign in
        <img className={css.userLogo} src={userLogo} />
      </div>
    </Link>
  );
};

export default UserLink;
