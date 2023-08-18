import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { BaseURL } from '../config';

export interface IPromise<T> {
  path: string;
  options: AxiosRequestConfig;
  response?: T;
  error?: string;
  loading: boolean;
}

export const useService = <T>({ path, options }: IPromise<T>) => {
  const url = `${BaseURL}/${path}`;
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  options = {
    ...options,
    headers: {
      'ngrok-skip-browser-warning': true,
      ...options.headers,
    },
  };

  const callAPI = async () => {
    try {
      setLoading(true);

      switch (options.method) {
        case 'GET': {
          const resp = await axios.get<T>(url, options);
          setResponse(resp.data);
          break;
        }
        case 'POST': {
          const resp = await axios.post<T>(url, options.data, options);
          setResponse(resp.data);
          break;
        }
        case 'PATCH': {
          const resp = await axios.patch<T>(url, options.data, options);
          setResponse(resp.data);
          break;
        }
        case 'PUT': {
          const resp = await axios.put<T>(url, options.data, options);
          setResponse(resp.data);
          break;
        }
        case 'DELETE': {
          const resp = await axios.delete<T>(url, options);
          setResponse(resp.data);
          break;
        }
        default:
          setResponse(undefined);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.meta.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callAPI();
  }, [path]);

  return {
    response,
    error,
    loading,
  };
};
