import bottleMob from '../../images/home/BottleHomeMobile.png';
import bottleMob2x from '../../images/home/BottleHomeMobile2x.png';
import bottleTablet from '../../images/home/BottleHomeTablet.png';
import bottleTablet2x from '../../images/home/BottleHomeTablet2x.png';
import bottleDesk from '../../images/home/BotleHomeDesk.png';
import bottleDesk2x from '../../images/home/BotleHomeDesk2x.png';

import s from './Picture.module.css';
const Picture = () => {
  return (
    <picture className={s.bottlePicture}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${bottleDesk} 1x, ${bottleDesk2x} 2x`}
        type="image/png"
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${bottleTablet} 1x, ${bottleTablet2x} 2x`}
        type="image/png"
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${bottleMob} 1x, ${bottleMob2x} 2x`}
        type="image/png"
      />
      <img src={bottleDesk} alt="Bottle" />
    </picture>
  );
};

export default Picture;
