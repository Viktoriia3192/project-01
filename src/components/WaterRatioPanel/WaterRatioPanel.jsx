import { useSelector } from 'react-redux';
import Button from '../common/Button/Button';
import s from './WaterRatioPanel.module.css';
import { selectWaterRate } from '../../redux/userInfo/userInfoSelectors';
import { selectTodayWater } from '../../redux/waterData/waterSelectors';

const WaterRatioPanel = () => {
  const waterRate = useSelector(selectWaterRate);
  const todayWater = useSelector(selectTodayWater);
  const totalWater = todayWater.totalWater;
  const percentage = ((totalWater / waterRate) * 100).toFixed(0);

  return (
    <div className={s.container}>
      <div className={s.scrollbarWrapper}>
        <p className={s.title}>Today</p>
        <div className={s.scrollBar}>
          <div className={s.barOuter}>
            <div
              className={s.barFilled}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className={s.percentage}>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        <Button
          className={s.scrollBarBtn}
          title={'Add Water'}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default WaterRatioPanel;
