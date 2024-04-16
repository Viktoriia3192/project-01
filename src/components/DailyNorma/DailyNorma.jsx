import { useSelector } from 'react-redux';
import Button from '../common/Button/Button';

import s from './DailyNorma.module.css';
import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';

const DailyNorma = () => {
  const waterRate = useSelector(selectWaterRate);
  return (
    <div className={s.container}>
      <h2 className={s.title}>My daily norma</h2>
      <div className={s.normaEditor}>
        <p className={s.waterRate}>{(waterRate / 1000).toFixed(1)} L</p>
        <Button className={s.editBtn} title={'Edit'} onClick={() => {}} />
      </div>
    </div>
  );
};

export default DailyNorma;
