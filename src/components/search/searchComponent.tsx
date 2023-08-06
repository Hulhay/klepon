import { FC, memo } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

import { SearchBar, SearchWrapper } from './searchComponentStyle';

interface ISearchComponent {
  placeholder?: string;
}

const SearchComponent: FC<ISearchComponent> = ({ placeholder }: ISearchComponent) => {
  return (
    <SearchWrapper>
      <HiOutlineSearch className="search-icon" />
      <SearchBar placeholder={placeholder}></SearchBar>
    </SearchWrapper>
  );
};

export default memo(SearchComponent);
