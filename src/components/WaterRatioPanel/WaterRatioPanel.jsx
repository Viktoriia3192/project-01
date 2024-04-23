// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../common/Button/Button';
import s from './WaterRatioPanel.module.css';
import { useSelector } from 'react-redux';
// import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';
import { selectTodayWater } from '../../redux/waterData/waterSelectors';
// import { todayThunk } from '../../redux/waterData/waterOperations';
import AddWaterModal from '../AddWaterModal/AddWaterModal';

const WaterRatioPanel = () => {
  const [modalContent, setModalContent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const waterRate = useSelector(selectWaterRate);
  const { percentageWaterDrunk } = useSelector(selectTodayWater);
  // const totalWater = todayWater.totalWater;
  // const percentage = ((totalWater / waterRate) * 100).toFixed(0);
  const openModal = (children) => {
    setModalContent(children);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(todayThunk());
  // }, [dispatch]);
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
