import { useSelector } from 'react-redux';
import SignUpForm from '/src/components/SignUpForm/SignUpForm';
import { selectAuthError } from '../../redux/auth/authSelectors';
import { StyledBackgroundWrap, StyledErrorMessage } from './SignUpPage.styled';

const SignUpPage = () => {
  const authError = useSelector(selectAuthError);

  return (
    <>
      <SignUpForm />
      <StyledBackgroundWrap></StyledBackgroundWrap>
      {authError && <StyledErrorMessage>{authError}</StyledErrorMessage>}
    </>
  );
};

export default SignUpPage;
