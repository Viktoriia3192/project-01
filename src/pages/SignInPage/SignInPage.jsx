import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  StyledBackgroundWrap,
  StyledErrorMessage,
} from '../SignInPage/SignInPage.styled';
import { AuthForm } from '../../components/AuthForm';
const SignInPage = () => {
  const authError = useSelector(selectAuthError);
  return (
    <>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </>
  );
};

export default SignInPage;
