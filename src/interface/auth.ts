import { Meta } from './base-service';

export interface IRegister {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface RegisterResponse {
  meta: Meta;
  data: null;
}
