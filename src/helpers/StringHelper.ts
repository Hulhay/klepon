export const emailFormat =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const phoneNumberFormat = /(^0\d+$)/;

export const validateEmailFormat = (email: string) => {
  return emailFormat.test(email);
};

export const validatePhoneNumberFormat = (phoneNumber: string) => {
  return phoneNumberFormat.test(phoneNumber);
};
