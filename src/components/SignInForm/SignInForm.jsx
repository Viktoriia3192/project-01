import { useFormik } from 'formik';
import s from '../SignInForm/SignInForm.module.css';
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must not be less than 8 characters';
  }
  return errors;
};
const SignInForm = () => {
  // defining handleSubmit function for form submission

  // using useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
            type="text"
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
