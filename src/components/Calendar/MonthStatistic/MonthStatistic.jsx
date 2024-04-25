import s from './MonthStatistic.module.css';
import { compareDates, today } from '../helpers/getDate';
import { getMonthsArr } from '../helpers/getMonthsArr';
import PopoverDay from '../DaysGeneralStats/PopoverDay';
import { useSelector } from 'react-redux';
import { selectMonthWater } from '../../../redux/waterData/waterSelectors';

const MonthStatistic = ({ selectedMonth, monthStatistic, registrationDate }) => {
  const today2 = useSelector(selectMonthWater);
console.log('today', today2)
  const currentMonth = (year, month, statistic) => {
    const daysArr = [];
    const monthData = getMonthsArr(year)[month];

    if (!monthData) {
      return daysArr;
    }

    const picData = [selectedMonth.month, selectedMonth.year];
    const todayData = [today.month, today.year];
    const compare = compareDates(picData, todayData);

    for (let i = 1; i <= monthData.numberOfDays; i += 1) {
      const day = statistic.find(statisticOneDay => {
        const date = statisticOneDay.date
          ? new Date(statisticOneDay.date)
          : new Date(statisticOneDay.day);
        return date.getDate() === i;
      });

      if (compare === 0) {
        if (!day && i <= today.day) {
          daysArr.push({ date: i, percent: '0%', norm: '2L', drinks: 0});
        }
        if (!day && i > today.day) {
          daysArr.push({ date: i, percent: ''});
        }
        if (day) {
          const drinkCount = Array.isArray(day.drinks)
            ? day.drinks.length
            : day.drinks;
          daysArr.push({
            date: i,
            percent: `${day.percent}%`,
            norm: `${day.norm / 1000}L`,
            drinks: drinkCount,
          
          });
        }
      }
      if (compare === 1) {
        daysArr.push({ date: i, percent: ''});
      }

      if (compare === -1) {
        if (day) {
          daysArr.push({
            date: i,
            percent: `${day.percent}%`,
            norm: `${day.norm / 1000}L`,
            drinks: day.drinks,
          
          });
        } else if (selectedMonth.year === registrationDate.year && selectedMonth.month === registrationDate.month && i < registrationDate.day) {
          daysArr.push({ date: i, percent: '', norm: '2L', drinks: 0 });

        } else {
          daysArr.push({ date: i, percent: '0%', norm: '2L', drinks: 0});
        }
      }
    }
    return daysArr;
  };

  const statistic = currentMonth(
    selectedMonth.year,
    selectedMonth.month,
    monthStatistic
  );
console.log(statistic)
  return (
    <>
      <div className={s.div}>
        {statistic.map(({ date, drinks, norm, percentageWaterDrunk }) => (
          <li className={s.li} key={date}>
            <PopoverDay
              key={date}
              date={date}
              drinks={drinks}
              norm={norm}
              selectedMonth={selectedMonth}
              percentageWaterDrunk={percentageWaterDrunk}
            />
            <p className={s.p}>{percentageWaterDrunk}%</p>
          </li>
        ))}
      </div>
    </>
  );
};

export default MonthStatistic;
