// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../common/Button/Button';
import s from './WaterRatioPanel.module.css';
// import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';
// import { selectTodayWater } from '../../redux/waterData/waterSelectors';

const WaterRatioPanel = () => {
  // const [modalContent, setModalContent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const waterRate = useSelector(selectWaterRate);
  // const todayWater = useSelector(selectTodayWater);
  // const totalWater = todayWater.totalWater;
  // const percentage = ((totalWater / waterRate) * 100).toFixed(0);
  // const openModal = (children) => {
  //   setModalContent(children);
  //   setModalIsOpen(true);
  // };
  return (
    <>
      <div className={s.container}>
        <div className={s.barWrapper}>
          <h2 className={s.title}>Today</h2>
          <div className={s.bar}>
            <div className={s.barOuter}>
              <div className={s.barFilled} style={{ width: `30%` }}>
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
          // onClick={() => openModal(<AddWaterModal />)}
        />
      </div>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {/* {modalContent} */}
      </Modal>
    </>
  );
};

export default WaterRatioPanel;
