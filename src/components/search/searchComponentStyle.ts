import styled from 'styled-components';

import { palette } from '../../utils';

export const Wrapper = styled.div`
  background-color: ${palette.primary};
  padding: 10px;
  position: fixed;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 999px;
  padding: 0px 17px;
  border: 1px solid ${palette.placeholder};
  display: flex;
  align-items: center;
  gap: 7px;
  background-color: ${palette.white};

  .search-icon {
    color: ${palette.highlight};
    width: 20px;
    height: 20px;
    stroke-width: 3;
  }

  .clear-icon {
    color: ${palette.placeholder};
    width: 20px;
    height: 20px;
  }

  .hidden {
    visibility: hidden;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  color: ${palette.text};
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;
