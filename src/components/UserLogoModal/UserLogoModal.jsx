import css from './UserLogoModal.module.css';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';
import SettingModal from '../SettingModal/SettingModal';
const UserLogoModal = () => {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const toggleLogOutModal = () => {
    setIsLogOutModalOpen(!isLogOutModalOpen);
  };
  return (
    <div className={css.modal}>
      <button
        className={css.settingButton}
        onClick={() => setIsSettingOpen(!isSettingOpen)}
      >
        <svg className={css.toothSvg}>
          <use xlinkHref={`${sprite}#icon-settings`}></use>
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
          <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
        </svg>
        Log out
      </button>

      {isLogOutModalOpen && (
        <LogOutModal
          isOpen={isLogOutModalOpen}
          setIsLogOutModalOpen={setIsLogOutModalOpen}
        />
      )}
      {isSettingOpen && (
        <SettingModal
          isOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
        />
      )}
    </div>
  );
};

export default UserLogoModal;
