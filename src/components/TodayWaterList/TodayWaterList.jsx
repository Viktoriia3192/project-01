import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import EditWaterModal from '../EditWater/EditWaterModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import AddWaterModal from '../AddWaterModal/AddWaterModal';
import { selectTodayWater } from '../../redux/waterData/waterSelectors';
import { todayThunk } from '../../redux/waterData/waterOperations';
import sprite from '../../images/sprite.svg';
import s from './TodayWaterList.module.css';

const TodayWaterList = () => {
  const todayWater = useSelector(selectTodayWater);
  const { dosesWater } = todayWater;
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayThunk());
  }, [dispatch, modalIsOpen]);

  const openModal = (children, data = {}) => {
    setModalData(data);
    setModalContent(children);
    setModalIsOpen(true);
  };
  const handleCloseModal = async () => {
    await dispatch(todayThunk());
    setModalIsOpen(false);
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Today</h2>
        <div className={s.todayBox}>
          <table className={s.waterTable}>
            <tbody>
              {dosesWater?.length > 0 ? (
                dosesWater
                  .toSorted(
                    (a, b) =>
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                  )
                  .map((dose) => (
                    <tr key={dose._id} className={s.tRow}>
                      <td>
                        <svg className={s.glassSvg}>
                          <use href={`${sprite}#icon-glass`}></use>
                        </svg>
                      </td>
                      <td className={s.doseVolume}>{dose.waterVolume} ml</td>
                      <td className={s.doseTime}>{dose.time}</td>

                      <td>
                        <button
                          type="button"
                          aria-label="Edit button"
                          className={s.editBtn}
                          onClick={() =>
                            openModal(
                              <EditWaterModal
                                modalData={{
                                  recordId: dose._id,
                                  waterVolume: dose.waterVolume,
                                  time: dose.time,
                                }}
                                onClose={handleCloseModal}
                              />,
                              {
                                recordId: dose._id,
                                waterVolume: dose.waterVolume,
                                time: dose.time,
                              }
                            )
                          }
                        >
                          <svg className={s.editSvg}>
                            <use href={`${sprite}#icon-edit`}></use>
                          </svg>
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          aria-label="Delete button"
                          className={s.deleteBtn}
                          onClick={() =>
                            openModal(
                              <DeleteModal
                                modalData={dose._id}
                                onClose={handleCloseModal}
                              />,
                              dose._id
                            )
                          }
                        >
                          <svg className={s.deleteSvg}>
                            <use href={`${sprite}#icon-delete`}></use>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr className={s.noNotesRow}>
                  <td className={s.noNotes}>No notes yet</td>
                </tr>
              )}
            </tbody>
          </table>
          <button
            type="submit"
            className={s.addBtn}
            onClick={() =>
              openModal(
                <AddWaterModal
                  modalData={modalData}
                  onClose={handleCloseModal}
                />
              )
            }
          >
            <svg className={s.plusSvg}>
              <use href={`${sprite}#icon-plus-small`}></use>
            </svg>
            Add water
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default TodayWaterList;
