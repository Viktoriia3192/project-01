import css from './UserLogoModal.module.css';
import sprite from '../../images/sprite.svg';
const UserLogoModal = () => {
  return (
    <div className={css.modal}>
      <button className={css.settingButton}>
        <svg className={css.toothSvg}>
          <use href={`${sprite}#icon-6-tooth`}></use>
        </svg>
        Setting
      </button>
      <button className={css.logOutButton}>
        <svg className={css.LogOutSvg}>
          <use href={`${sprite}#icon-arrow-right`}></use>
        </svg>
        Log out
      </button>
    </div>
  );
};

export default UserLogoModal;
