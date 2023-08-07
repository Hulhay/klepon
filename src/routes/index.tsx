import { createBrowserRouter } from 'react-router-dom';

import { Navbar } from '../components';
import { Home, NotFound, Order, Profile } from '../pages';

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
]);

export default Navigations;
