import { memo, useEffect, useState } from 'react';
import { GoHome, GoHomeFill, GoPerson, GoPersonFill } from 'react-icons/go';
import { RiFileList3Fill, RiFileList3Line } from 'react-icons/ri';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { useScroll } from '../../hooks';
import { NavbarWrapper } from './navbarComponentStyle';

const Navbar = () => {
  const location = useLocation();
  const scroll = useScroll();
  const [hide, setHide] = useState<string>('');

  useEffect(() => {
    if (scroll.y > 50 && scroll.y - scroll.curY > 0) {
      setHide('hidden');
    } else {
      setHide('');
    }
  }, [scroll.y, scroll.curY]);

  return (
    <>
      <NavbarWrapper className={hide}>
        <Link to={'/'}>
          {location.pathname === '/' ? (
            <GoHomeFill className="icon" />
          ) : (
            <GoHome className="icon" />
          )}
        </Link>
        <Link to={'/order'}>
          {location.pathname === '/order' ? (
            <RiFileList3Fill className="icon" />
          ) : (
            <RiFileList3Line className="icon" />
          )}
        </Link>
        <Link to={'/profile'}>
          {location.pathname === '/profile' ? (
            <GoPersonFill className="icon" />
          ) : (
            <GoPerson className="icon" />
          )}
        </Link>
      </NavbarWrapper>
      <Outlet />
    </>
  );
};

export default memo(Navbar);
