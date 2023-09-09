export interface DataToSaveStorage {
  key: string;
  value: unknown;
}

export const setLocalStorage = (data: DataToSaveStorage) => {
  const { key, value } = data;
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  return;
};

export const getLocalStorage = (key: string, parse?: boolean) => {
  const value = localStorage.getItem(key);
  if (parse) {
    const parsed = JSON.parse(value as string);
    return parsed;
  }
  return value;
};
