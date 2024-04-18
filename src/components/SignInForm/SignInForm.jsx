import { FormikContext, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import s from '../SignInForm/SignInForm.module.css';
import { signInThunk } from '../../redux/auth/authOperations.js';
import * as Yup from 'yup';

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

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
        <FormikContext.Provider value={formik}>
          <form onSubmit={handleFormSubmit} noValidate>
            <label htmlFor="email">Email Address</label>
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
              value={formik.values.firstName}
            />
            <button type="submit">Submit</button>
          </form>
        </FormikContext.Provider>
      </div>
    </div>
  );
};

export default SignInForm;
