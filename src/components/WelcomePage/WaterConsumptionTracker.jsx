
import { Link } from 'react-router-dom';
import css from './WaterConsumptionTracker.module.css'; 
import { ReactComponent as IconBar } from '../../icons/icon-bar.svg';
import { ReactComponent as IconCalendar } from '../../icons/icon-calendar.svg';
import { ReactComponent as IconScrewdriver } from '../../icons/icon-screwdriver.svg';

const WaterConsumptionTracker = () => {
  return (
    <div className={css.trackerContainer}>
      <h3 className={css.trackerContainerH3}>Tracker Benefits</h3>
      <ul className={css.trackerContainerUl}>
        <li className={css.trackerContainerLi}> 
        <IconCalendar className={css.svgIcon} /> Habit drive
        </li>
        <li className={css.trackerContainerLi}>
        <IconBar className={css.svgIcon} /> View statistics
        </li>
        <li className={css.trackerContainerLi}>
        <IconScrewdriver className={css.svgIcon} /> Personal rate setting
        </li>
      </ul>
      <Link to="/signup" className={css.trackerBtn}>Try tracker</Link>
    </div>
  );
};

export default WaterConsumptionTracker;

