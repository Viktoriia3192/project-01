import css from './UserLogoModal.module.css';
const UserLogoModal = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>Modal</div>
    </div>
  );
};

export default UserLogoModal;
