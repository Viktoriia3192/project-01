import{u as r,e as a,j as e}from"./index-3f5b8abe.js";import{n as o,m as n,a as t,b as p,t as d,c as x,d as s,e as l,f as m,g as u,A as c}from"./AuthForm-1b06ab5b.js";const g=o.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 150px;
  left: 0;
  z-index: -10;
  background-image: url(${n}),
    url(${t});
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 400px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${p}),
      url(${t});
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: 104px;
    left: 0;
    background-image: url(${d});tabBottle2x
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${x});
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 18px;
    background-image: url(${s}),
      url(${l});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${m}),
        url(${u});
    }
  }
`,b=o.p`
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
`,w=()=>{const i=r(a);return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(c,{}),i&&e.jsx(b,{children:i})]})};export{w as default};
