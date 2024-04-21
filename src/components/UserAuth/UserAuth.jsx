import {
  selectAuthIsSignedIn,
  selectAuthUserData,
} from '../../redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';

import sprite from '../../images/sprite.svg';
import css from './UserAuth.module.css';
import { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal.jsx';

const UserAuth = () => {
  const userData = useSelector(selectAuthUserData);
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={css.userAuthContainer}>
      <button className={css.signinButton} onClick={toggleModal}>
        <p className={css.userName}>
          {userData.name ? userData.name : userData.email}
        </p>
        <img className={css.userLogo} src={userData.avatarURL} />
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
