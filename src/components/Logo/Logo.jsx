import logo from '../../../public/Logo.png';
import css from './Logo.module.css';
const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <img className={css.logo} src={logo} />
      <p className={css.logoText}>TRACKER OF WATER</p>
    </div>
  );
};

export default Logo;
