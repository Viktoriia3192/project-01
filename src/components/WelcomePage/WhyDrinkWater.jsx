import React from 'react';
import css from './WhyDrinkWater.module.css'; 
import ellipse from '../../icons/ellipse.svg';

const WhyDrinkWater = () => {
  return (
    <div className={css.whyWaterContainer}>
      <h3 className={css.whyWaterContainerH3}>Why drink water</h3>
      <ul className={css.whyWaterContainerUl}>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Supply of nutrients to all organs</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Providing oxygen to the lungs</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Maintaining the work of the heart</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Release of processed substances</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Ensuring the stability of the internal environment</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Maintaining within the normal temperature</li>
        <li><img src={ellipse} alt="Ellipse" className={css.whyWaterContainerSvg} />Maintaining an immune system capable of resisting disease</li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;