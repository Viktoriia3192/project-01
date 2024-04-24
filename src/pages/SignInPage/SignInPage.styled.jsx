import styled from '@emotion/styled';
//import colors from '../../root/root';
import mobBottle from '../../images/signup/mobile/bottle-sign-in@1x.png';
import mobBubbles from '../../images/signup/mobile/background-element-sign-in@1x.png';

import mobBottle2x from '../../images/signup/mobile/bottle-sign-in@2x.png';
import mobBubbles2x from '../../images/signup/mobile/background-element-sign-in@1x.png';

import tabBottle from '../../images/signup/tablet/bottle-for-sign-in@1x.png';
import tabBottle2x from '../../images/signup/tablet/bottle-for-sign-in@2x.png';

import deskBottle from '../../images/signup/desktop/bottle-for-sign-in@1x.png';
import deskBub from '../../images/signup/desktop/background-element-main-page@1x.png';

import deskBottle2x from '../../images/signup/desktop/bottle-for-sign-in@2x.png';
import deskBub2x from '../../images/signup/desktop/background-element-main-page@2x.png';

export const StyledBackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -10;
  background-image: url(${mobBottle}), url(${mobBubbles});
  background-size: 100%, cover;
  background-repeat: no-repeat;
  background-position:
    top 400px left 20px,
    center;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobBottle2x}), url(${mobBubbles2x});
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
    width: 100%;
    height: 100vh;
    top: -20px;
    left: 0;
    right: 30px;
    background-image: url(${tabBottle});
    background-size: cover;
    background-position: center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabBottle2x});
    }
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1404px;
    width: 100%;
    height: 100vh;
    top: 60px;
    left: 18px;
    background-image: url(${deskBottle}), url(${deskBub});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      center;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${deskBottle2x}), url(${deskBub2x});
    }
  }
`;

export const StyledErrorMessage = styled.p`
  margin-top: 20px;
  width: 280px;
  font-size: 18px;
  text-align: center;
  color: var(--secondary-color-red);
  @media (min-width: 768px) {
    width: 320px;
    margin-right: auto;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
    margin-right: 133px;
  }
`;
