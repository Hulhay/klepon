import { memo } from 'react';

import { LoadingComponent } from './loadingComponentStyle';
import Spinner from './spinner';

export interface ILoading {
  midScreen?: boolean;
}

const Loading = ({ midScreen }: ILoading) => {
  return (
    <LoadingComponent className={midScreen ? 'midScreen' : ''}>
      <Spinner />
    </LoadingComponent>
  );
};

export default memo(Loading);
