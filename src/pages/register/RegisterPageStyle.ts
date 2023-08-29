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
`;
