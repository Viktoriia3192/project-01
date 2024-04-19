import { useState } from 'react';
import Modal from '../Modal/Modal';
import css from './LogOutModal.module.css';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authOperations';

export default function LogOutModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className={css.LogOutModal}>
          <h2 className={css.modal_title}>Log out</h2>
          <p className={css.modal_p}>Do you really want to leave?</p>
          <div className={css.buttons}>
            <button
              className={css.cancel_btn}
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button className={css.delete_btn} onClick={handleLogOut}>
              Log out
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
