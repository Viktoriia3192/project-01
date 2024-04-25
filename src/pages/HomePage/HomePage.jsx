import { useSelector } from 'react-redux';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../../components/Loader/Loader';
import Picture from '../../components/Picture/Picture.jsx';
import MonthStatsTable2 from '../../components/MonthStatsTable/MonthStatsTable2.jsx';
import s from './HomePage.module.css';

const HomePage = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.dailyNormaWrapper}>
          <DailyNorma />
          <Picture />
          <WaterRatioPanel />
        </div>
        <div className={s.todayMonthWrapper}>
          <TodayWaterList />
          <MonthStatsTable2 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
