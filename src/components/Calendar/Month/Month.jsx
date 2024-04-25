import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {ReactComponent as Solidl} from '../../../icons/solidl.svg';
import {ReactComponent as Solid} from '../../../icons/solid.svg';
import { monthThunk } from '../../../redux/waterData/waterOperations';
import { selectMonthWater } from '../../../redux/waterData/waterSelectors';

import {
  ArrowButton,
  CalendarContainer,
  DaysContainer,
  MonthNavigation,
  MonthControl,
  StyledMonth,
} from './Month.styled';
import DayComponent from '../DayComponent/DayComponent';

const Month = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dispatch = useDispatch();
  const waterForMonth = useSelector(selectMonthWater);
  console.log(waterForMonth)
  const ref = useRef(null);

  useEffect(() => {
    dispatch(monthThunk(currentDate.getMonth()));
  }, [dispatch, currentDate]);

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

    return days.map(day => {
      const waterPercentage = waterForMonth?.find(item => {
        return Number(item.data.split(',')[0]) === day;
      });

      return (
        <DayComponent
          calendarRef={ref}
          key={day}
          day={day}
          waterPercentage={waterPercentage}
        />
      );
    });
  };

  return (
    <CalendarContainer className="calendar" ref={ref}>
      <MonthNavigation>
        <h2>Month</h2>
        <MonthControl>
          <ArrowButton aria-label="Previous month" onClick={handlePrevMonth}>
            <Solidl />
          </ArrowButton>
          <StyledMonth>
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}
          </StyledMonth>
          <ArrowButton aria-label="Previous month" onClick={handleNextMonth}>
             <Solid />
          </ArrowButton>
        </MonthControl>
      </MonthNavigation>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Month;