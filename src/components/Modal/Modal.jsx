import { useEffect } from 'react';
import { Transition } from 'react-transition-group';

import css from './Modal.module.css';
import sprite from '../../images/sprite.svg';

export default function Modal({ isOpen, onClose, children }) {
  const onWrapperClick = (e) => {
    if (e.target.classList.contains(css.modal_wrapper)) {
      onClose();
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`${css.modal} ${css[`modal--${state}`]}`}>
            <div className={css.modal_wrapper} onClick={onWrapperClick}>
              <div className={css.modal_content}>
                <button className={css.close_btn} onClick={() => onClose()}>
                  <svg className={css.close_icon}>
                    <use xlinkHref={`${sprite}#icon-x-close`} />
                  </svg>
                </button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
