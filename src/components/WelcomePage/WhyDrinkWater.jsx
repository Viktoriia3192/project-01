
import css from './WhyDrinkWater.module.css'; 
import sprite from '../../images/sprite.svg';

const WhyDrinkWater = () => {
  return (
    <div className={css.whyWaterContainer}>
      <h3 className={css.whyWaterContainerH3}>Why drink water</h3>
      <ul className={css.whyWaterContainerUl}>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} width="8" height="8"/>
          </svg>Supply of nutrients to all organs</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} />
          </svg>Providing oxygen to the lungs</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} />
          </svg>Maintaining the work of the heart</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} />
          </svg>Release of processed substances</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} />
          </svg>Ensuring the stability of the internal environment</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} />
          </svg>Maintaining within the normal temperature</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${sprite}#ellipse`} width="8" height="8" />
          </svg>Maintaining an immune system capable of resisting disease</li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;