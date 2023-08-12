import { styled } from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  &.btn-action {
  }

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

export const ButtonActionWrapper = styled.div`
  align-self: end;
`;

export const QtyCounter = styled.div`
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

export const ProductBottomSheet = styled.div`
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
  gap: 25px;

  &.active {
    transform: translateY(0);
  }

  .description {
    align-self: start;
    padding-left: 10px;
  }

  img {
    width: 100%;
    max-width: 350px;
    aspect-ratio: 1/1;
    border: 0;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  .name-btm-sheet {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: -7px;
  }

  .price-btm-sheet {
    font-size: 18px;
  }

  .btn-add-btm-sheet {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: ${palette.white};
    background-color: ${palette.highlight};
  }

  .disable {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: ${palette.white};
    background-color: ${palette.placeholder};
  }
`;
