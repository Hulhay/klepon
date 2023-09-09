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
