import AuthGoogleBtn from '../common/AuthGoogleBtn/AuthGoogleBtn';
import { useFormik } from 'formik';
import s from '../SignUpForm/SignUpForm.module.css';

const SignUpForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+]{8,64}$/i.test(values.password)) {
      errors.password = 'Password must not be less than 8 characters';
    }

    if (!values.confirmPassword) {
      errors.password = 'It is required to confirm password';
    } else if (
      !/^[a-zA-Z0-9!@#$%^&*()_+]{8,64}$/i.test(values.confirmPassword)
    ) {
      errors.confirmPassword = 'Passwords should match';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={s.container}>
      <div className={s.form}>
        <form onSubmit={formik.handleSubmit}>
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
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.password ? (
            <div className={s.error}>{formik.errors.password}</div>
          ) : null}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.confirmPassword ? (
            <div className={s.error}>{formik.errors.confirmPassword}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
