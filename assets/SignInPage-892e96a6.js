import{f as m,j as e,L as x,i as u,u as h,k as g}from"./index-cc0bac7f.js";import{F as b,c as w,a as r,b as f,d as k,e as t,m as v,f as a,g as y,t as j,h as S,i as $,j as z,k as B,l as E}from"./background-element-main-page@2x-fb8a3532.js";import{n as i}from"./emotion-styled.browser.esm-99fb4528.js";const F=i(b)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
  @media (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    width: 384px;
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: var(--primery-color-black);
  }
  label {
    position: relative;
  }

  input {
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid var(--secondary-color---5);
    color: var(--primery-color-blue);
  }
  input::placeholder {
    color: var(--secondary-color-lightblue);
  }
  input:focus {
    outline-color: var(--secondary-color---5);
  }
  input:invalid {
    color: var(--secondary-color-red);
    border: 1px solid var(--secondary-color-red);
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primery-color-black);
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: var(--secondary-color-orange);
  }
`,I=i.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: var(--primery-color-blue);
  color: var(--primery-color-white);
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`,n=i.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`;i.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`;const P=w().shape({email:r().email("Please enter a valid email").required("E-mail is required"),password:r().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),repeatPassword:r().oneOf([f("password"),null],"The passwords do not match").required("Repeat password field is required")}),q=()=>{const o=m(),s={email:"",password:"",repeatPassword:""},l=({email:p,password:d},{resetForm:c})=>{event.preventDefault(),o(u({email:p,password:d})),c()};return e.jsx(k,{initialValues:s,validationSchema:P,onSubmit:l,children:e.jsxs(F,{children:[e.jsx("h1",{children:"Sign In"}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your email"}),e.jsx(t,{name:"email",type:"email",placeholder:"E-mail"})]}),e.jsxs("label",{children:[e.jsx(n,{children:"Enter your password"}),e.jsx(t,{name:"password",type:"password",placeholder:"Password",pattern:".{8,}"})]}),e.jsx(I,{type:"submit",children:"Sign In"}),e.jsx(x,{to:"/signup",children:"Sign Up"})]})})},U=i.div`
  max-width: 320px;
  width: 100%;
  height: 570px;
  position: absolute;
  top: 150px;
  left: 0;
  z-index: -10;
  background-image: url(${v}),
    url(${a});
  background-size: 280px, cover;
  background-repeat: no-repeat;
  background-position:
    top 400px left 20px,
    top 0 left 0;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${y}),
      url(${a});
  }

  @media (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    height: 680px;
    top: 104px;
    left: 0;
    background-image: url(${j});tabBottle2x
    background-size: cover;
    background-position: top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${S});
    }
  }

  @media (min-width: 1440px) {
    max-width: 1404px;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 18px;
    background-image: url(${$}),
      url(${z});
    background-size: 916px, 1404px;
    background-position:
      top 28px left -51px,
      top 0 left 0;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${B}),
        url(${E});
    }
  }
`,D=i.p`
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
`,A=()=>{const o=h(g);return e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(q,{}),o&&e.jsx(D,{children:o})]})};export{A as default};
