import { styled } from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  background-color: ${palette.primary};
  padding: 10px 15px;
  position: fixed;
  width: 100%;

  a {
    display: flex;
    aligin-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;

  .header-icon {
    color: ${palette.text};
    width: 25px;
    height: 25px;
  }

  .clear-icon {
    color: ${palette.text};
    width: 28px;
    height: 28px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${palette.placeholder};
  background-color: ${palette.primary};
  color: ${palette.text};
  font-size: 14px;
  font-weight: 400;
  padding: 5px;
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;

export const StoreName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: left;
  transition: transform 200ms ease-in-out;

  &.show {
    visibility: visible;
  }

  &.hide {
    transform: translateY(100%);
    visibility: hidden;
  }
`;
