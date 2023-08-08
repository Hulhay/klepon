import { createBrowserRouter } from 'react-router-dom';

import { Navbar } from '../components';
import { Home, Menu, NotFound, Order, Profile } from '../pages';

const Navigations = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: 'store/:storeUUID/menu',
    element: <Menu />,
  },
]);

export default Navigations;
