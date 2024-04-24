import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  StyledBackgroundWrap,
  StyledErrorMessage,
} from '../SignInPage/SignInPage.styled';
import { AuthForm } from '../../components/AuthForm';
import { SignupContainer } from '../SignUpPage/SignUpPage.styled';
const SignInPage = () => {
  const authError = useSelector(selectAuthError);
  return (
    <SignupContainer>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </SignupContainer>
  );
};

export default SignInPage;
