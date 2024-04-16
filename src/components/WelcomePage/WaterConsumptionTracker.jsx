
import { Link } from 'react-router-dom';
import css from './WaterConsumptionTracker.module.css'; 
import sprite from '../../images/sprite.svg';

const WaterConsumptionTracker = () => {
  return (
    <div className={css.trackerContainer}>
      <h3 className={css.trackerContainerH3}>Tracker Benefits</h3>
      <ul className={css.trackerContainerUl}>
        <li className={css.trackerContainerLi}> 
        <svg className={css.svgIcon}>
            <use xlinkHref={`${sprite}#icon-calendar`}/>
          </svg> Habit drive
        </li>
        <li className={css.trackerContainerLi}>
        <svg className={css.svgIcon}>
            <use xlinkHref={`${sprite}#icon-bar`}/>
          </svg> View statistics
        </li>
        <li className={css.trackerContainerLi}>
        <svg className={css.svgIcon}>
            <use xlinkHref={`${sprite}#icon-screwdriver`}/>
          </svg> Personal rate setting
        </li>
      </ul>
      <Link to="/signup" className={css.trackerBtn}>Try tracker</Link>
    </div>
  );
};

export default WaterConsumptionTracker;

