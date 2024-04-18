import{f as m,j as s,l as d}from"./index-e83f8920.js";import{c,a as i,b as u,u as h,F as p}from"./index.esm-1eb24848.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const w="_container_11h9l_1",f="_form_11h9l_5",x="_error_11h9l_23",j="_submitBtn_11h9l_29",e={container:w,form:f,error:x,submitBtn:j},v=()=>{const n=m(),t=c().shape({email:i().email("Please enter a valid email").required("E-mail is required"),password:i().min(8,"Password must be 8 or more characters").max(64).required("Password is required"),confirmPassword:i().oneOf([u("password"),null],"The passwords do not match").required("Repeat password field is required")}),l=async a=>{a.preventDefault();const o=await r.validateForm();Object.keys(o).length===0&&r.handleSubmit()},r=h({initialValues:{email:"",password:"",confirmPassword:""},validationSchema:t,onSubmit:async({email:a,password:o})=>{n(d({email:a,password:o}))}});return s.jsx("div",{className:e.container,children:s.jsx("div",{className:e.form,children:s.jsx(p.Provider,{value:r,children:s.jsxs("form",{onSubmit:l,noValidate:!0,children:[s.jsx("label",{htmlFor:"email",children:"Email Address"}),s.jsx("input",{id:"email",name:"email",type:"email",onChange:r.handleChange,value:r.values.email}),r.errors.email?s.jsx("div",{className:e.error,children:r.errors.email}):null,s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{id:"password",name:"password",type:"password",onChange:r.handleChange,value:r.values.firstName}),r.errors.password?s.jsx("div",{className:e.error,children:r.errors.password}):null,s.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),s.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",onChange:r.handleChange,value:r.values.firstName}),r.errors.confirmPassword?s.jsx("div",{className:e.error,children:r.errors.confirmPassword}):null,s.jsx("button",{type:"submit",children:"Submit"})]})})})})};function S(){return s.jsx(v,{})}export{S as default};
