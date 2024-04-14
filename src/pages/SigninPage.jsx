import { useFormik } from 'formik';

const SignPage = () => {
  // setting initial values for form fields
  const initialValues = {
    email: '',
    password: '',
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
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignPage;
