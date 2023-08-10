import { Provider } from 'react-redux/es/exports';
import { RouterProvider } from 'react-router-dom';

import Navigations from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Navigations} />;
    </Provider>
  );
};

export default App;
