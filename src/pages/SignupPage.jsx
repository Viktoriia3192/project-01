import { useFormik } from 'formik';

const SignupPage = () => {
  // setting initial values for form fields
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  // defining handleSubmit function for form submission
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  // using useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupPage;
