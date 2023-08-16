import { memo, useState } from 'react';
import React from 'react';
import { HiOutlineSearch, HiXCircle } from 'react-icons/hi';

import { lang } from '../../../../utils';
import { SearchBar, SearchWrapper, Wrapper } from './searchComponentStyle';

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && keyword.length > 2) {
      console.log(keyword);
    }
  };

  const onClear = () => {
    setKeyword('');
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <HiOutlineSearch className="search-icon" />
        <SearchBar
          placeholder={lang('home.search_placeholder')}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={keyword}
        ></SearchBar>
        <HiXCircle className={`clear-icon ${!keyword && 'hidden'}`} onClick={onClear} />
      </SearchWrapper>
    </Wrapper>
  );
};

export default memo(Search);
