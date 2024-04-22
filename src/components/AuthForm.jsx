import SignInForm from '../components/SignInForm/SignInForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';

export const AuthForm = ({ isRegister = false }) => {
  return isRegister ? <SignUpForm /> : <SignInForm />;
};

<AuthForm />;
