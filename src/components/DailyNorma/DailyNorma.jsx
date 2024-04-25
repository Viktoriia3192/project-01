import { useSelector } from 'react-redux';
import Button from '../common/Button/Button';

import s from './DailyNorma.module.css';
import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  // const dispatch =useDispatch();
  const waterRate = useSelector(selectWaterRate);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = async () => {
    setModalIsOpen(false);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>My daily norma</h2>
      <div className={s.normaEditor}>
        <p className={s.waterRate}>{waterRate / 1000} L</p>
        <Button
          className={s.editBtn}
          title={'Edit'}
          onClick={handleOpenModal}
        />
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <DailyNormaModal onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default DailyNorma;
