import { useEffect, useRef, useState } from 'react';
import DayComponent from './DayComponent/DayComponent';
import s from './MonthStatsTable2.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonthWater } from '../../redux/waterData/waterSelectors';
import { monthThunk } from '../../redux/waterData/waterOperations';
import sprite from '../../images/sprite.svg';

const MonthStatsTable2 = () => {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDate = `${year}-${formattedMonth}`;

  useEffect(() => {
    dispatch(monthThunk(formattedDate));
  }, [dispatch, formattedDate]);

  const waterForMonth = useSelector(selectMonthWater);

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return days.map((day) => {
      const dayInfo = waterForMonth?.find((item) => {
        return Number(item.date.split(',')[0]) === day;
      });

      return (
        <DayComponent calendarRef={ref} key={day} day={day} dayInfo={dayInfo} />
      );
    });
  };

  return (
    <div className={s.calendar} ref={ref}>
      <div className={s.navigation}>
        <h2 className={s.title}>Month</h2>
        <div className={s.control}>
          <button
            className={s.arrowBtn}
            aria-label="Previous month"
            onClick={handlePrevMonth}
          >
            <svg className={s.arrowSvg}>
              <use href={`${sprite}#icon-arrow-prev`}></use>
            </svg>
          </button>
          <span className={s.month}>
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}
            {`, ${year}`}
          </span>
          <button
            className={s.arrowBtn}
            aria-label="Next month"
            onClick={handleNextMonth}
          >
            <svg className={s.arrowSvg}>
              <use href={`${sprite}#icon-arrow-next`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={s.daysContainer}>{renderDays()}</div>
    </div>
  );
};

export default MonthStatsTable2;
