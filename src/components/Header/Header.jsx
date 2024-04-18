import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../../redux/auth/authSelectors';
import UserLink from '../UserLink/UserLink';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  return (
    <div className={css.headerContainer}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      {isLoggedIn ? <UserAuth /> : <UserLink />}
    </div>
  );
};

export default Header;
