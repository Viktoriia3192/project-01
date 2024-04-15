import React from 'react';
import { Link } from 'react-router-dom';
import css from './WaterConsumptionTracker.module.css'; 

const WaterConsumptionTracker = () => {
  return (
    <div className={css.trackerContainer}>
      <h3 className={css.trackerContainerH3}>Tracker Benefits</h3>
      <ul className={css.trackerContainerUl}>
        <li className={css.trackerContainerLi}> 
          <svg
            xlinkHref="../../icons/Vector1.svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={css.svgIcon}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              fill="currentColor"
            />
          </svg> Habit drive
        </li>
        <li className={css.trackerContainerLi}>
          <svg
            xlinkHref="../../icons/Vector2.svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={css.svgIcon}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              fill="currentColor"
            />
          </svg> View statistics
        </li>
        <li className={css.trackerContainerLi}>
          <svg
            xlinkHref="../../icons/Vector3.svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={css.svgIcon}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              fill="currentColor"
            />
          </svg> Personal rate setting
        </li>
      </ul>
      <Link to="/signup" className={css.trackerBtn}>Try tracker</Link>
    </div>
  );
};

export default WaterConsumptionTracker;