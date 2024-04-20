import styled from '@emotion/styled';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  width: 100%;
  @media (min-width: 768px) {
    width: 336px;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    width: 384px;
    margin-top: 140px;
    margin-right: 104px;
    margin-left: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
    color: var(--primery-color-black);
  }
  label {
    position: relative;
  }

  input {
    padding: 12px 10px;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    border-radius: 6px;
    border: 0;
    outline: 1px solid var(--secondary-color---5);
    color: var(--primery-color-blue);
  }
  input::placeholder {
    color: var(--secondary-color-lightblue);
  }
  input:focus {
    outline-color: var(--secondary-color---5);
  }
  input:invalid {
    color: var(--secondary-color-red);
    border: 1px solid var(--secondary-color-red);
  }

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }

  a {
    width: fit-content;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primery-color-black);
    transition: color ease-in-out 250ms;
  }
  a:hover {
    color: var(--secondary-color-orange);
  }
`;
export const StyledSubmitBtn = styled.button`
  padding: 8px 30px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 10px;
  border: none;
  background-color: var(--primery-color-blue);
  color: var(--primery-color-white);
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }
`;
export const StyledFieldName = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.33;
  color: var(--primery-color-black);
`;

export const StyledToggleBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 44px;
  background: none;
  border: none;
  cursor: pointer;
  stroke: var(--primery-color-blue);
`;

// export const StyledError = styled(ErrorMessage)`
//   margin-left: 4px;
//   font-size: 14px;
//   color: ${colors.secondaryColor3};
// `;
