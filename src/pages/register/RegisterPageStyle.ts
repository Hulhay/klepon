import { styled } from 'styled-components';

import { palette } from '../../utils';

export const FormRegister = styled.form`
  width: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 7px;

  img {
    width: 250px;
    margin-bottom: 58px;
  }

  p {
    align-self: flex-start;
    font-size: 12px;
  }

  p:nth-last-child(n) {
    align-self: center;

    a {
      color: ${palette.highlight};
      text-decoration: none;
    }
  }
`;

export const Field = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid ${palette.placeholder};
  border-radius: 7px;
  color: ${palette.text};
  font-size: 14px;
  font-weight: 400;
  padding: 0px 13px;

  &:focus {
    outline: none;
  }

  &.invalid {
    border: 2px solid red;
  }
`;

export const ButtonRegister = styled.button`
  margin-top: 68px;
  width: 130px;
  background-color: ${palette.highlight};
  border: 1px solid ${palette.highlight};
  color: ${palette.white};
  padding: 10px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;

  &.loading {
    opacity: 50%;
  }
`;

export const SuccessBottomSheet = styled.div`
  z-index: 1;
  width: 100%;
  padding: 47px 17px 17px;
  background-color: ${palette.primary};
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: transform 150ms ease-in-out;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &.active {
    transform: translateY(0);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  line-height: 1.2em;

  p:first-child {
    font-weight: 600;
    font-size: 22px;
  }
`;

export const ButtonActionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const ButtonBack = styled.button`
  width: 50%;
  background-color: ${palette.primary};
  border: 1px solid ${palette.highlight};
  color: ${palette.highlight};
  padding: 10px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
`;

export const ButtonConfirm = styled.button`
  width: 50%;
  background-color: ${palette.highlight};
  border: 1px solid ${palette.highlight};
  color: ${palette.white};
  padding: 10px;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
`;
