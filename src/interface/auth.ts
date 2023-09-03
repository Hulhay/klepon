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

export interface ILogin {
  email: string;
  password: string;
}

export interface LoginResponseData {
  token: string;
  expired_at: string;
}

export interface LoginResponse {
  meta: Meta;
  data: LoginResponseData;
}
