import { memo } from 'react';

import { LoadingPage } from './loadingComponentStyle';
import Spinner from './spinner';

const Loading = () => {
  return (
    <LoadingPage>
      <Spinner />
    </LoadingPage>
  );
};

export default memo(Loading);
