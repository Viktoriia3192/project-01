import { useDispatch } from 'react-redux';

import sprite from '../../images/sprite.svg';
import Modal from '../Modal/Modal';

import s from './TodayWaterList.module.css';

// import { selectTodayWater } from '../../redux/waterData/waterSelectors';
import { useEffect, useState } from 'react';
import { todayThunk } from '../../redux/waterData/waterOperations';
import { todayWater } from './data';

const TodayWaterList = () => {
  // const todayWaterPortions = useSelector(selectTodayWater);

  // const [modalContent, setModalContent] = useState(null);
  // const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayThunk());
  }, [dispatch]);

  // const openModal = (children, data) => {
  //   setModalContent(children);
  //   setModalIsOpen(true);
  //   setModalData(data);
  // };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Today</h2>
        <div className={s.todayBox}>
          <table className={s.waterTable}>
            <tbody>
              {todayWater.dosesWater
                .toSorted(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((dose) => (
                  <tr key={dose._id} className={s.tRow}>
                    {/* <td className={s.doseInfo}> */}
                    <td>
                      <svg className={s.glassSvg}>
                        <use href={`${sprite}#icon-glass`}></use>
                      </svg>
                    </td>
                    <td className={s.doseVolume}>{dose.waterVolume} ml</td>
                    <td className={s.doseTime}>
                      {new Intl.DateTimeFormat('en', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                      }).format(new Date(dose.date)?.toJSON()?.split('T')[0])}
                    </td>
                    {/* </td> */}
                    <td>
                      <button
                        type="button"
                        aria-label="Edit button"
                        className={s.editBtn}
                        // onClick={() =>
                        //   openModal(
                        //     <EditWaterModal modalData={modalData} />,
                        //     data
                        //   )
                        // }
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
                        // onClick={() =>
                        //   openModal(<DeleteWaterModal ModalData />, data._id)
                        // }
                      >
                        <svg className={s.deleteSvg}>
                          <use href={`${sprite}#icon-delete`}></use>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            type="submit"
            className={s.addBtn}
            // onClick={() => openModal(<AddWaterModal />)}
          >
            <svg className={s.plusSvg}>
              <use href={`${sprite}#icon-plus-small`}></use>
            </svg>
            Add water
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {/* {modalContent} */}
      </Modal>
    </>
  );
};

export default TodayWaterList;
