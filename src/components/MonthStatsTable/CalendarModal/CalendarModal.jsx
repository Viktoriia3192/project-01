import { motion } from 'framer-motion';
import { scaleYVariants } from './variants';
import * as s from './CalendarModal.module.css';
const CalendarModal = ({ calendarRef, refData, waterData = {} }) => {
  const { date, waterRate, percentageWaterDrunk, records } = waterData;

  const currentRef = refData?.current.getBoundingClientRect().left;
  const containerRef = calendarRef?.current.getBoundingClientRect().left;

  let position = true;

  const delta = currentRef - containerRef;
  if (delta < 300) {
    position = false;
  }

  return (
    <motion.div
      className={s.modal}
      variants={scaleYVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      delta={position}
      deltaNum={delta}
    >
      {waterData.records > 0 ? (
        <div>
          <h3 className={s.title}>{date}</h3>
          <p className={s.text}>
            Daily norma: <span className={s.value}>{waterRate}</span>
          </p>
          <p className={s.text}>
            Fulfillment of the daily norm:{' '}
            <span className={s.value}>{percentageWaterDrunk}%</span>
          </p>
          <p className={s.text}>
            How many servings of water:{' '}
            <span className={s.value}>{records}</span>
          </p>
        </div>
      ) : (
        <h3 className={s.text}>You do not have info about this day.</h3>
      )}
    </motion.div>
  );
};

export default CalendarModal;
