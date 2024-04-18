import { useFormik, FormikContext } from 'formik';
import s from '../SignUpForm/SignUpForm.module.css';
import { signUpThunk } from '../../redux/auth/authOperations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

const SignUpForm = () => {
  const dispatch = useDispatch();
  //const [showPassword, setShowPassword] = useState(false);
  //const { t } = useTranslation();
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async ({ email, password }) => {
      const newUser = { email, password };
      dispatch(signUpThunk(newUser));
    },
  });

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
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
        </FormikContext.Provider>
      </div>
    </div>
  );
};

export default SignUpForm;
