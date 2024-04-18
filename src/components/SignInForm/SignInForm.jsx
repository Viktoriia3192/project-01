import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import s from '../SignInForm/SignInForm.module.css';
//import { useState, useTransition } from 'react';
import { signInThunk } from '../../redux/auth/authOperations.js';
import * as Yup from 'yup';

const SignInForm = () => {
  //const [visible, setVisible] = useState(false);
  //const { t } = useTranslation();

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      dispatch(signInThunk({ email, password }));
    },
    validationSchema: validationSchema,
  });

  return (
    <div className={s.container}>
      <div className={s.form}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className={s.error}>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className={s.error}>{formik.errors.password}</div>
          ) : null}
          <button type="submit" className={s.submitBtn}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
