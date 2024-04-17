import { useFormik } from 'formik';
import s from '../SignUpForm/SignUpForm.module.css';
import { signUpThunk } from '../../redux/auth/authOperations';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const SignUpForm = () => {
  const dispatch = useDispatch();
  //const [showPassword, setShowPassword] = useState(false);
  //const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          'Invalid email address'
        ),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
    }),
    onSubmit: async ({ email, password }) => {
      try {
        dispatch(signUpThunk({ email, password }));
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
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
            type="password"
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
            type="password"
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
