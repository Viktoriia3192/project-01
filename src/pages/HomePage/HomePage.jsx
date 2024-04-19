import { useSelector } from 'react-redux';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/Calendar/MonthStatsTable.jsx';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';

import s from './HomePage.module.css';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../../components/Loader/Loader';
import Picture from '../../components/BGPicture/Picture';
import SettingModal from '../../components/SettingModal/SettingModal.jsx';

const HomePage = () => {
  const isLoading = useSelector(selectAuthIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.dailyNormaWrapper}>
          <SettingModal />
          <DailyNorma />
          <Picture />
          <WaterRatioPanel />
        </div>
        <div className={s.todayMonthWrapper}>
          <TodayWaterList />
          <MonthStatsTable />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
