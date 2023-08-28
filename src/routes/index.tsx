import { createBrowserRouter } from 'react-router-dom';

import { Navbar } from '../components';
import { Home, Login, NetworkError, NotFound, Order, Product, Profile } from '../pages';

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
    path: 'store/:storeUUID/product',
    element: <Product />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'network-error',
    element: <NetworkError />,
  },
]);

export default Navigations;
