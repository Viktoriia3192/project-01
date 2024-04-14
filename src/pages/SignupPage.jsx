import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth/authOperations.js';
//import { t } from 'i18next';
//import { FormikContext, useFormik } from 'formik';
//import { useState } from 'react';
//import { FormTextField } from '../components/common/FormTextField/FormTextField.jsx';

const SignupPage = () => {
  const dispatch = useDispatch();

  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [isPasswordShown, setIsPasswordShown] = useState(false);

  // // defining handleSubmit function for form submission
  // const handleSubmit = (values) => {
  //   alert(JSON.stringify(values, null, 2));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsFormSubmitted(true);
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  // using useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    //validationSchema: RegisterSchema,
    onSubmit: async ({ email, password, confirmPassword }) => {
      const newUser = { email, password, confirmPassword };
      dispatch(signup(newUser));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupPage;
