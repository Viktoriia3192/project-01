import { useSelector } from 'react-redux';
import SignInForm from '../../components/SignInForm/SignInForm';
import { selectAuthError } from '../../redux/auth/authSelectors';
import {
  StyledBackgroundWrap,
  StyledErrorMessage,
} from '../SignInPage/SignInPage.styled';
const SignInPage = () => {
  const authError = useSelector(selectAuthError);
  return (
    <>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <SignInForm />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </>
  );
};

export default SignInPage;
