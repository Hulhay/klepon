import { memo } from 'react';

import { LoadingComponent } from './loadingComponentStyle';
import Spinner from './spinner';

const Loading = () => {
  return (
    <LoadingComponent>
      <Spinner />
    </LoadingComponent>
  );
};

export default memo(Loading);
