import { AnimatePresence } from 'framer-motion';
import CalendarModal from '../CalendarModal/CalendarModal';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './DayComponent.module.css';
import clsx from 'clsx';

const DayComponent = ({ calendarRef, day, dayInfo }) => {
  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleModal = useCallback((modalId = null) => {
    setActiveModal((prevModal) => (prevModal === modalId ? null : modalId));
  }, []);

  return (
    <div className={s.dayCell} key={day}>
      <AnimatePresence>
        {activeModal === day && (
          <CalendarModal
            calendarRef={calendarRef}
            refData={ref}
            key={day}
            waterData={dayInfo}
          />
        )}
      </AnimatePresence>
      <div
        className={clsx(
          s.day,
          !dayInfo?.percentageWaterDrunk || dayInfo.percentageWaterDrunk < 100
            ? ''
            : s.outlineVisible
        )}
        ref={ref}
        onClick={() => toggleModal(day)}
      >
        {day}
      </div>
      <span className={s.dayPercent}>
        {dayInfo?.percentageWaterDrunk
          ? `${dayInfo.percentageWaterDrunk}%`
          : '0%'}
      </span>
    </div>
  );
};

export default DayComponent;
