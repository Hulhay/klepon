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

export const AlertBottomSheet = styled.div`
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
