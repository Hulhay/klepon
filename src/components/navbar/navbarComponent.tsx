import { memo, useEffect, useState } from 'react';
import { GoHome, GoHomeFill, GoPerson, GoPersonFill } from 'react-icons/go';
import { RiFileList3Fill, RiFileList3Line } from 'react-icons/ri';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { NavbarWrapper } from './navbarComponentStyle';

const Navbar = () => {
  const location = useLocation();
  const [home, setHome] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHome(true);
        setOrder(false);
        setProfile(false);
        break;
      case '/order':
        setHome(false);
        setOrder(true);
        setProfile(false);
        break;
      case '/profile':
        setHome(false);
        setOrder(false);
        setProfile(true);
        break;
    }
  }, [location]);

  return (
    <>
      <NavbarWrapper>
        <Link to={'/'}>
          {home ? <GoHomeFill className="icon" /> : <GoHome className="icon" />}
        </Link>
        <Link to={'/order'}>
          {order ? (
            <RiFileList3Fill className="icon" />
          ) : (
            <RiFileList3Line className="icon" />
          )}
        </Link>
        <Link to={'/profile'}>
          {profile ? <GoPersonFill className="icon" /> : <GoPerson className="icon" />}
        </Link>
      </NavbarWrapper>
      <Outlet />
    </>
  );
};

export default memo(Navbar);
