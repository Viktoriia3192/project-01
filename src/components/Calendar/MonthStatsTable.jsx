import { useEffect, useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import { compareDates, funcGetDate, today } from './helpers/getDate';
import { useSelector } from 'react-redux';
import {
  selectTodayWater,
  selectMonthWater,
  selectWaterDataIsLoading,
} from '../../redux/waterData/waterSelectors';
import { requestAddWater } from '../../services/waterDataAPI';
import { updateOrAddCurrentDay } from './helpers/updateOrAddCurrentDay';
import PiSpinnerGap from '../Loader/Loader';
import m from './MonthStatsTablet.module.css';
import { getStartDay } from '../../redux/auth/authSelectors';

const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({ ...today });
  const [monthStatistic, setMonthStatistic] = useState([]);
  const currentMonthStatistic = useSelector(selectMonthWater);
  const currentDayStatistic = useSelector(selectTodayWater);
  const isMonthLoading = useSelector(selectWaterDataIsLoading);
  const [isOtherMonthLoading, setIsOtherMonthLoading] = useState(false);
  const startDay =useSelector(getStartDay);
  const registrationDate = funcGetDate(startDay);

  useEffect(() => {
    const picData = [selectedMonth.month, selectedMonth.year];
    const todayData = [today.month, today.year];
    const compare = compareDates(picData, todayData);

    if (compare === 0) {
      if (currentMonthStatistic && currentDayStatistic) {
        const updatedData = updateOrAddCurrentDay(
          currentMonthStatistic,
          currentDayStatistic
        );
        setMonthStatistic([...updatedData]);
      }
    }

    if (compare === 1) {
      setMonthStatistic([]);
    }

    if (compare === -1) {
      const fetchData = async () => {
        try {
          setIsOtherMonthLoading(true);
          const newMonthStatistic = await requestAddWater({
            month: selectedMonth.month + 1,
            year: selectedMonth.year,
          });

          setMonthStatistic([...newMonthStatistic]);
        } catch (error) {
          setMonthStatistic([]);
        } finally {
          setIsOtherMonthLoading(false);
        }
      };
      fetchData();
    }
  }, [
    selectedMonth,
    currentMonthStatistic,
    currentDayStatistic,
    setMonthStatistic,
    setIsOtherMonthLoading,
  ]);

  return (
    <div>
      <MonthSwitcher
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        registrationDate={registrationDate}
      />{' '}
      <div className={m.month}>
        {isMonthLoading || isOtherMonthLoading ? (
          <div>
            <PiSpinnerGap/>
          </div>
        ) : (
          <MonthStatistic
            selectedMonth={selectedMonth}
            monthStatistic={monthStatistic}
              setSelectedMonth={setSelectedMonth}
              registrationDate={registrationDate}
          />
        )}{' '}
      </div>
    </div>
  );
};

export default MonthStatsTable;
