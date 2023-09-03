import { Method } from 'axios';

import { useService } from '../hooks';
import { ILogin, IRegister, LoginResponse, RegisterResponse } from '../interface';

export default {
  register: (data: IRegister) => {
    const { response, error, loading, request } = useService<RegisterResponse>({
      path: 'api/v1/auth/register',
      options: {
        method: 'POST' as Method,
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone_number: data.phoneNumber,
        },
      },
      loadOnStart: false,
    });
    return { response, error, loading, request };
  },
  login: (data: ILogin) => {
    const { response, error, loading, request } = useService<LoginResponse>({
      path: 'api/v1/auth/login',
      options: {
        method: 'POST' as Method,
        data: {
          email: data.email,
          password: data.password,
        },
      },
      loadOnStart: false,
    });
    return { response, error, loading, request };
  },
};
