import { Method } from 'axios';

import { useService } from '../hooks';
import { GetProductsResponse } from '../interface';

export default {
  getProducts: (storeUUID: string) => {
    const { response, loading, request } = useService<GetProductsResponse>({
      path: `api/v1/stores/${storeUUID}/products`,
      options: {
        method: 'GET' as Method,
      },
      loadOnStart: false,
    });
    return { response, loading, request };
  },
};
