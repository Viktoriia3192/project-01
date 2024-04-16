import s from './TodayWaterList.module.css';

const TodayWaterList = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Today</h2>
      <div className={s.todayBox}></div>
    </div>
  );
};

export default TodayWaterList;
