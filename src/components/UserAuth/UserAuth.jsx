import { selectAuthIsSignedIn } from '../../redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';

import userLogo from '../../../public/outline.png';
import sprite from '../../images/sprite.svg';
import css from './UserAuth.module.css';
import { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal.jsx';

const UserAuth = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={css.userAuthContainer}>
      <button className={css.signinButton} onClick={toggleModal}>
        Sign in
        <img className={css.userLogo} src={userLogo} />
        {isLoggedIn && (
          <svg className={css.arrowSvg}>
            <use href={`${sprite}#icon-double-up`}></use>
          </svg>
        )}
      </button>
      {isModalOpen && <UserLogoModal />}
    </div>
  );
};

export default UserAuth;
