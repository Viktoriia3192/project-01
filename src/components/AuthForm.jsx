
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export const AuthForm = ({ isRegister = false }) => {
  return isRegister ? <SignUpForm /> : <SignInForm />;
};



SignInPage
<AuthForm />