
import css from './WhyDrinkWater.module.css'; 
import ellipseSymbol from '../../icons/ellipse.svg';

const WhyDrinkWater = () => {
  return (
    <div className={css.whyWaterContainer}>
      <h3 className={css.whyWaterContainerH3}>Why drink water</h3>
      <ul className={css.whyWaterContainerUl}>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Supply of nutrients to all organs</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Providing oxygen to the lungs</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Maintaining the work of the heart</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Release of processed substances</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Ensuring the stability of the internal environment</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Maintaining within the normal temperature</li>
        <li><svg className={css.whyWaterContainerSvg}>
            <use xlinkHref={`${ellipseSymbol}#ellipse`} />
          </svg>Maintaining an immune system capable of resisting disease</li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;