import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <NavLink to="/signin">
        <UserAuth />
      </NavLink>
    </div>
  );
};

export default Header;
