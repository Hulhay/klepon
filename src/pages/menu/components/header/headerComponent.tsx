import { memo, useEffect, useState } from 'react';
import { HiArrowLeft, HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { useScroll } from '../../../../hooks';
import { lang } from '../../../../utils';
import { HeaderWrapper, SearchBar, StoreName, Wrapper } from './headerComponentStyle';

interface IHeaderMenu {
  storeName: string;
}

const Header = ({ storeName }: IHeaderMenu) => {
  const scroll = useScroll();
  const [showBar, setShowBar] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [display, setDisplay] = useState<string>('hide');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && keyword.length > 2) {
      console.log(`search for ${keyword}`);
    }
  };

  const onClear = () => {
    setShowBar(false);
    setKeyword('');
  };

  useEffect(() => {
    setDisplay(scroll.y > 85 ? 'show' : 'hide');
  }, [scroll]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Link to={'/'}>
          <HiArrowLeft className="header-icon" />
        </Link>
        {showBar ? (
          <>
            <SearchBar
              placeholder={lang('menu.search_placeholder')}
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={keyword}
            />
            <HiOutlineX className="clear-icon" onClick={onClear} />
          </>
        ) : (
          <>
            <StoreName className={display}>{storeName}</StoreName>
            <HiOutlineSearch className="header-icon" onClick={() => setShowBar(true)} />
          </>
        )}
      </HeaderWrapper>
    </Wrapper>
  );
};

export default memo(Header);
