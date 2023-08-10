import { styled } from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.placeholder};
  padding: 15px 0px 11px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    height: 82px;
    width: 82px;
    border: 0;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
  }
`;

export const Description = styled.div`
  font-weight: 500;

  .sold-out {
    font-size: 12px;
    color: ${palette.highlight};
  }
`;

export const ButtonAdd = styled.button`
  width: 82px;
  background-color: ${palette.primary};
  border: 1px solid ${palette.highlight};
  color: ${palette.highlight};
  padding: 5px;
  font-weight: 600;
  border-radius: 999px;
  align-self: end;
  cursor: pointer;

  &.disable {
    color: ${palette.placeholder};
    border: 1px solid ${palette.placeholder};
  }
`;

export const AmountWrapper = styled.div`
  width: 82px;
  color: ${palette.highlight};
  font-weight: 600;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${palette.text};
  }

  .action-btn {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;
