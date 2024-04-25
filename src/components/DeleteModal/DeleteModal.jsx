import { useDispatch } from 'react-redux';
import {
  deleteWaterThunk,
  monthThunk,
  todayThunk,
} from '../../redux/waterData/waterOperations';
import css from './DeleteModal.module.css';

export default function DeleteModal({ onClose, modalData }) {
  const dispatch = useDispatch();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const formattedMonth = `${year}-${month}`;

  const handleDelete = async () => {
    await dispatch(deleteWaterThunk(modalData));
    await dispatch(todayThunk());
    await dispatch(monthThunk(formattedMonth));
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
