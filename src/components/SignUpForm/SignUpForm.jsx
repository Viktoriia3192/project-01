//import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { signUpThunk } from '../../redux/auth/authOperations';

import {
  // StyledError,
  StyledFieldName,
  StyledForm,
  StyledSubmitBtn,
} from './SignUpForm.styled';
//import { ReactComponent as Eye } from '/src/svgs/icons/eye.svg';
//import { ReactComponent as SlashedEye } from '/src/svgs/icons/slashed-eye.svg';

const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 or more characters')
    .max(64)
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'The passwords do not match')
    .required('Repeat password field is required'),
});

const SignUpForm = () => {
  //const [isPasswordVisible, setPasswordVisibility] = useState(false);
  // const [isRepeatPasswordVisible, setRepeatPasswordVisibility] =
  //   useState(false);

  const dispatch = useDispatch();

  const formInitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = ({ email, password }, { resetForm }) => {
    event.preventDefault();
    const newUser = { email, password };
    dispatch(signUpThunk(newUser));
    resetForm();
  };
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <h1>Sign Up</h1>
        <label>
          <StyledFieldName>Enter your email</StyledFieldName>
          <Field name="email" type="email" placeholder="E-mail" />
          {/* <StyledError name="email" component="span" /> */}
        </label>
        <label>
          <StyledFieldName>Enter your password</StyledFieldName>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            pattern=".{8,}"
          />
          {/* <StyledToggleBtn
          type="button"
          onClick={() => setPasswordVisibility(!isPasswordVisible)}
        > */}
          {/* {isPasswordVisible ? <Eye /> : <SlashedEye />} */}
          {/* </StyledToggleBtn> */}
          {/* <StyledError name="password" component="span" /> */}
        </label>
        <label>
          <StyledFieldName>Repeat password</StyledFieldName>
          <Field
            name="repeatPassword"
            type="password"
            placeholder="Repeat password"
            pattern=".{8,}"
          />

          {/* <StyledError name="repeatPassword" component="span" /> */}
        </label>
        <StyledSubmitBtn type="submit">Sign Up</StyledSubmitBtn>
        <Link to="/signin">Sign in</Link>
      </StyledForm>
    </Formik>
  );
};

export default SignUpForm;
