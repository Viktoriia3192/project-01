// import { useState } from 'react';
import css from './DeleteModal.module.css';
import { useDispatch } from 'react-redux';
// import Modal from '../Modal/Modal';
import { deleteWaterThunk } from '../../redux/waterData/waterOperations';

export default function DeleteModal({ onClose, modalData }) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterThunk(modalData));
  };

  return (
    <>
      {/* <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}> */}
      <div className={css.deleteModal}>
        <h2 className={css.modal_title}>Delete entry</h2>
        <p className={css.modal_p}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.buttons}>
          <button className={css.cancel_btn} onClick={onClose}>
            Cancel
          </button>
          <button className={css.delete_btn} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      {/* </Modal> */}
    </>
  );
}
