import { styled } from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${palette.white};
  padding: 17px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${palette.placeholder};
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%);

  &.active {
    transform: translateY(0);
  }

  &.hide {
    transform: translateY(100%);
  }
`;

export const Cart = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 999px;
  padding: 0px 20px;
  background-color: ${palette.highlight};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${palette.white};
    font-weight: 500;
    font-size: 16px;
  }
`;

export const QtyWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .icon {
    color: ${palette.white};
    width: 23px;
    height: 23px;
  }
`;
