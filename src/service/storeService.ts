import axios from 'axios';

import { BaseURL, SizePagination } from '../config';
import { GetStoresResponse } from '../interface';

export default {
  getStores: async (page: number, keyword?: string) => {
    const url = `${BaseURL}/api/v1/stores`;
    const { data } = await axios.get<GetStoresResponse>(`${url}`, {
      headers: {
        'ngrok-skip-browser-warning': true,
      },
      params: {
        page: page,
        size: SizePagination(),
        keyword,
      },
    });
    return data;
  },
};
