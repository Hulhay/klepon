import styled from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  width: 170px;
  height: 230px;

  a {
    text-decoration: none;
  }
`;

export const StoreWrapper = styled.div`
  height: 230px;
  border-radius: 18px;
  background-color: ${palette.white};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 150px;
    border: 0;
    border-radius: 18px;
    object-fit: cover;
  }

  p {
    margin: 3px 8px;
  }

  .store-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3em;
    font-weight: 600;
    font-size: 16px;
    color: ${palette.text};
  }
`;

export const ConfirmationBottomSheet = styled.div`
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
