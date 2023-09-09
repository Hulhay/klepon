export const isExpired = (dateTime: string) => {
  const date = new Date(dateTime);
  const now = new Date();
  return date > now;
};
