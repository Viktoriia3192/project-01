import sprite from '../../images/sprite.svg';
import Modal from '../Modal/Modal';

import s from './TodayWaterList.module.css';

import { selectTodayWater } from '../../redux/waterData/waterSelectors';
import { useEffect, useState } from 'react';
// import { todayWater } from './data';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditWaterModal from '../EditWater/EditWaterModal';
// import { AddForm } from '../AddForm/AddForm';

import { useDispatch, useSelector } from 'react-redux';
import { todayThunk } from '../../redux/waterData/waterOperations';

const TodayWaterList = () => {
  const todayWater = useSelector(selectTodayWater);
  const { dosesWater } = todayWater;
  const [modalContent, setModalContent] = useState(null);
  const [modalData, setModalData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayThunk());
  }, [dispatch]);

  const openModal = (children, data) => {
    console.log(todayWater);
    console.log(data);

    setModalData(data);
    setModalContent(children);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Today</h2>
        <div className={s.todayBox}>
          <table className={s.waterTable}>
            <tbody>
              {dosesWater ? (
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
                                modalData={modalData}
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
                                modalData={modalData}
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
                <tr>
                  <td>No notes yet</td>
                </tr>
              )}
            </tbody>
          </table>
          <button
            type="submit"
            className={s.addBtn}

            // onClick={() => openModal(<AddWaterModal modalData={modalData}
            //                     onClose={handleCloseModal}/>)}
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
