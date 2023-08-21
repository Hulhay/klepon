import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { BaseURL } from '../config';

export interface IPromise<T> {
  path: string;
  options: AxiosRequestConfig;
  loadOnStart: boolean;
  response?: T;
  error?: string;
  loading?: boolean;
  request?: () => void;
}

export const useService = <T>({ path, options, loadOnStart }: IPromise<T>) => {
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

  const sendRequest = async () => {
    setLoading(true);
    try {
      switch (options.method) {
        case 'GET': {
          const { data } = await axios.get<T>(url, options);
          setResponse(data);
          break;
        }
        case 'POST': {
          const { data } = await axios.post<T>(url, options.data, options);
          setResponse(data);
          break;
        }
        case 'PATCH': {
          const { data } = await axios.patch<T>(url, options.data, options);
          setResponse(data);
          break;
        }
        case 'PUT': {
          const { data } = await axios.put<T>(url, options.data, options);
          setResponse(data);
          break;
        }
        case 'DELETE': {
          const { data } = await axios.delete<T>(url, options);
          setResponse(data);
          break;
        }
        default:
          setResponse(undefined);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const request = async () => {
    await sendRequest();
  };

  useEffect(() => {
    if (loadOnStart) {
      sendRequest();
    }
  }, [url, options, loadOnStart]);

  return {
    response,
    error,
    loading,
    request,
  };
};
