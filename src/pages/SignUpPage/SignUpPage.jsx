import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  SignupContainer,
  StyledBackgroundWrap,
  StyledErrorMessage,
} from './SignUpPage.styled';
import { AuthForm } from '../../components/AuthForm';

const SignUpPage = () => {
  const authError = useSelector(selectAuthError);

  return (
    <SignupContainer>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm isRegister />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </SignupContainer>
  );
};

export default SignUpPage;
