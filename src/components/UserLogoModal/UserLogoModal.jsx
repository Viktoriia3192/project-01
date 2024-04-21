import css from './UserLogoModal.module.css';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';
const UserLogoModal = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const toggleLogOutModal = () => {
    setIsLogOutModalOpen(!isLogOutModalOpen);
  };
  return (
    <div className={css.modal}>
      <button className={css.settingButton}>
        <svg className={css.toothSvg}>
          <use href={`${sprite}#icon-6-tooth`}></use>
        </svg>
        Setting
      </button>
      <button
        className={css.logOutButton}
        onClick={() => {
          toggleLogOutModal();
        }}
      >
        <svg className={css.LogOutSvg}>
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
        Log out
      </button>
      {isLogOutModalOpen && (
        <LogOutModal
          isOpen={isLogOutModalOpen}
          setIsLogOutModalOpen={setIsLogOutModalOpen}
        />
      )}
    </div>
  );
};

export default UserLogoModal;
