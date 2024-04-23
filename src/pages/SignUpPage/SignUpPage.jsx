import { useSelector } from 'react-redux';
import { selectAuthError } from '../../redux/auth/authSelectors';
import { StyledBackgroundWrap, StyledErrorMessage } from './SignUpPage.styled';
import { AuthForm } from '../../components/AuthForm';

const SignUpPage = () => {
  const authError = useSelector(selectAuthError);

  return (
    <>
      <StyledBackgroundWrap></StyledBackgroundWrap>
      <AuthForm isRegister />
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </>
  );
};

export default SignUpPage;
