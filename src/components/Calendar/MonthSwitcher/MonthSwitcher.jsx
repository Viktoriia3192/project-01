import { getMonthsArr } from '../helpers/getMonthArr';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './MonthSwitcher.module.css';
import {  today } from '../helpers/getDate';

const MonthSwitcher = ({ selectedMonth, setSelectedMonth, registrationDate}) => {


  const handlePrevMonth = () => {
    selectedMonth.month === 0
      ? setSelectedMonth(prev => ({ ...prev, month: 11, year: prev.year - 1 }))
      : setSelectedMonth(prev => ({ ...prev, month: prev.month - 1 }));
  };

  const handleNextMonth = () => {
    selectedMonth.month === 11
      ? setSelectedMonth(prev => ({ ...prev, month: 0, year: prev.year + 1 }))
      : setSelectedMonth(prev => ({ ...prev, month: prev.month + 1 }));
  };

  const isButtonPrevDisabled = () => {
    return registrationDate.month === selectedMonth.month &&
      registrationDate.year === selectedMonth.year
      ? true
      : false;
  };

  const isButtonNextDisabled = () => {
    return (
      selectedMonth.year >= today.year + 5 &&
      selectedMonth.month === today.month
    );
  };

  return (
    <div>
      <h2 className="title">Month</h2>
      <div>
        <button onClick={handlePrevMonth} disabled={isButtonPrevDisabled()}>
          <SlArrowLeft fill='#407bff' />
        </button>
        <p>
          {getMonthsArr(selectedMonth.year)[selectedMonth.month].name},{' '}
          {selectedMonth.year}
        </p>
        <button onClick={handleNextMonth} disabled={isButtonNextDisabled()}>
          <SlArrowRight fill='#407bff' />
        </button>
      </div>
    </div>
  );
};

export default MonthSwitcher;
