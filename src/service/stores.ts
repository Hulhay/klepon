import axios from 'axios';

import { BaseURL } from '../config';
import { GetStoresResponse } from '../interface';

export const GetStores = async (keyword: string) => {
  const url = `${BaseURL}/api/v1/stores`;
  const { data } = await axios.get<GetStoresResponse>(`${url}`, {
    headers: {
      'ngrok-skip-browser-warning': true,
    },
    params: {
      keyword,
    },
  });
  return data;
};
