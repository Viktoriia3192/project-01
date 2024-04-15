import Button from '../common/Button/Button';
import s from './WaterRatioPanel.module.css';

const WaterRatioPanel = () => {
  return (
    <div className={s.container}>
      <div className={s.scrollbarWrapper}>
        <p className={s.title}>Today</p>
        <div className={s.scrollBar}>
          <div className={s.barOuter}>
            <div className={s.barFilled} style={{ width: '50%' }}></div>
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
