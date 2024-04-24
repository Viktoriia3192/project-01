import { useDispatch } from 'react-redux';
import {
  deleteWaterThunk,
  todayThunk,
} from '../../redux/waterData/waterOperations';
import css from './DeleteModal.module.css';

export default function DeleteModal({ onClose, modalData }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteWaterThunk(modalData));
    await dispatch(todayThunk());
    onClose();
  };

  return (
    <>
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
    </>
  );
}