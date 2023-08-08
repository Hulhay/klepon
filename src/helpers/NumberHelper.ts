export const formatNumber = (
  number: number,
  locales = 'id-ID',
  options: Intl.NumberFormatOptions = {},
) => {
  return new Intl.NumberFormat(locales, options).format(number);
};

export const formatToRupiah = (
  number: number,
  prefix = '',
  options: Intl.NumberFormatOptions = {},
) => {
  const rupiah = formatNumber(number, 'id-ID', options);

  return `${prefix}${rupiah}`;
};
