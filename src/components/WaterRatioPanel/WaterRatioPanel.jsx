// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../common/Button/Button';
import s from './WaterRatioPanel.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';
import { selectTodayWater } from '../../redux/waterData/waterSelectors';
import { todayThunk } from '../../redux/waterData/waterOperations';
import AddWaterModal from '../AddWaterModal/AddWaterModal';

const WaterRatioPanel = () => {
  const dispatch = useDispatch();
  const [modalContent, setModalContent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { percentageWaterDrunk } = useSelector(selectTodayWater);

  const openModal = (children) => {
    setModalContent(children);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    dispatch(todayThunk());
  }, [dispatch, percentageWaterDrunk]);

  return (
    <>
      <div className={s.container}>
        <div className={s.barWrapper}>
          <h2 className={s.title}>Today</h2>
          <div className={s.bar}>
            <div className={s.barOuter}>
              <div
                className={s.barFilled}
                style={{ width: `${percentageWaterDrunk}%` }}
              >
                <div className={s.dot}></div>
              </div>
            </div>

            <div className={s.percentageBox}>
              <span className={s.percent}>0%</span>
              <span className={s.percent}>50%</span>
              <span className={s.percent}>100%</span>
            </div>
          </div>
        </div>
        <Button
          className={s.addBtn}
          title={'Add Water'}
          onClick={() =>
            openModal(<AddWaterModal onClose={handleCloseModal} />)
          }
        />
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
    </>
  );
};

export default WaterRatioPanel;
