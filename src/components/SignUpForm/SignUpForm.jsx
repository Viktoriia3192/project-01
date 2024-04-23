import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { signUpThunk } from '../../redux/auth/authOperations';

import {
  StyledError,
  StyledFieldName,
  StyledForm,
  StyledSubmitBtn,
  StyledToggleBtn,
  StyledWrapper,
} from './SignUpForm.styled';
import { useState } from 'react';

import { Icon } from '../Icon/Icon';

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
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isRepeatPasswordVisible, setRepeatPasswordVisibility] =
    useState(false);

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
      {(formik) => {
        return (
          <StyledWrapper>
            <StyledForm>
              <h1>Sign Up</h1>
              <label>
                <StyledFieldName>Enter your email</StyledFieldName>
                <Field name="email" type="email" placeholder="E-mail" />
                <StyledError name="email" component="span" />
              </label>
              <label>
                <StyledFieldName>Enter your password</StyledFieldName>
                <div>
                  <Field
                    name="password"
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    // pattern=".{8,}"
                  />
                  <StyledToggleBtn
                    type="button"
                    onClick={() => setPasswordVisibility(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <Icon
                        iconName={'icon-eye'}
                        width={'16px'}
                        height={'16px'}
                      />
                    ) : (
                      <Icon
                        iconName={'icon-eye-slash'}
                        width={'16px'}
                        height={'16px'}
                      />
                    )}
                  </StyledToggleBtn>
                </div>
                <StyledError name="password" component="span" />
              </label>
              <label>
                <StyledFieldName>Repeat password</StyledFieldName>
                <div>
                  <Field
                    name="repeatPassword"
                    type={isRepeatPasswordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    // pattern=".{8,}"
                  />
                  <StyledToggleBtn
                    type="button"
                    onClick={() =>
                      setRepeatPasswordVisibility(!isRepeatPasswordVisible)
                    }
                  >
                    {isRepeatPasswordVisible ? (
                      <Icon
                        iconName={'icon-eye'}
                        width={'16px'}
                        height={'16px'}
                      />
                    ) : (
                      <Icon
                        iconName={'icon-eye-slash'}
                        width={'16px'}
                        height={'16px'}
                      />
                    )}
                  </StyledToggleBtn>
                </div>

                <StyledError name="repeatPassword" component="span" />
              </label>
              <StyledSubmitBtn type="submit">Sign Up</StyledSubmitBtn>
              <Link
                to="/signin"
                onClick={() => {
                  formik.handleReset();
                }}
              >
                Sign in
              </Link>
            </StyledForm>
          </StyledWrapper>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
