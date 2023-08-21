import { Method } from 'axios';

import { SizePagination } from '../config';
import { useService } from '../hooks';
import { GetStoresResponse } from '../interface';

export default {
  getStores: (page: number) => {
    const { response, loading, request } = useService<GetStoresResponse>({
      path: 'api/v1/stores',
      options: {
        method: 'GET' as Method,
        params: { page, size: SizePagination() },
      },
      loadOnStart: false,
    });
    return { response, loading, request };
  },
};
