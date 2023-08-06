import { RouterProvider } from 'react-router-dom';

import Navigations from './routes';

const App = () => {
  return <RouterProvider router={Navigations} />;
};

export default App;
