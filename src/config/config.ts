import { getScreenWidth } from '../helpers';

export const BaseURL = import.meta.env.VITE_APP_BASE_URL;

export const SizePagination = () => {
  return getScreenWidth() > 400 ? 20 : 10;
};
