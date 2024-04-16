import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../../redux/auth/authSelectors.js';
import userLogo from '../../../public/outline.png';
import sprite from '../../images/sprite.svg';
import css from './UserAuth.module.css';
const UserAuth = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  return (
    <div className={css.userAuthContainer}>
      <button to="/signin" className={css.signinButton}>
        Sign in
        <img className={css.userLogo} src={userLogo} />
        {isLoggedIn && (
          <svg className={css.arrowSvg}>
            <use href={`${sprite}#icon-double-up`}></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default UserAuth;
