import styled from 'styled-components';

export const SearchWrapper = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 999px;
  padding: 0px 17px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  gap: 7px;

  .search-icon {
    color: #090707;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  color: #a9a9ac;
  font-size: 14px;
  font-weight: 400;
`;
