import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import pujasKitaLogo from '../../assets/pujaskitalogo.png';
import { validateEmailFormat } from '../../helpers';
import { ILogin } from '../../interface';
import { authService } from '../../service';
import { lang } from '../../utils';
import { ButtonLogin, Field, FormLogin } from './LoginPageStyle';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<string>('');
  const [invalidPassword, setInvalidPassword] = useState<string>('');
  const [loginData, setLoginData] = useState<ILogin>({
    email,
    password,
  });
  const { response, error, loading, request } = authService.login(loginData);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidEmail('');
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidPassword('');
    setPassword(event.target.value);
  };

  const validateRequest = () => {
    let hasErr = false;
    if (email === '') {
      setInvalidEmail(lang('login.err_empty_email'));
      hasErr = true;
    }
    if (email !== '' && !validateEmailFormat(email)) {
      setInvalidEmail(lang('login.err_invalid_email'));
      hasErr = true;
    }
    if (password === '') {
      setInvalidPassword(lang('login.err_empty_password'));
      hasErr = true;
    }
    if (password !== '' && password.length < 8) {
      setInvalidPassword(lang('login.err_short_password'));
      hasErr = true;
    }
    return hasErr;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateRequest()) return;
    request();
  };

  useEffect(() => {
    setLoginData({
      email,
      password,
    });
  }, [email, password]);

  useEffect(() => {
    if (error?.includes('email not found')) {
      setInvalidEmail(lang('login.err_email_not_found'));
    }
    if (error?.includes('wrong password')) {
      setInvalidPassword(lang('login.err_wrong_password'));
    }
  }, [error]);

  useEffect(() => {
    if (response?.meta.code === 200) {
      console.log({ response });
      navigate('/');
    }
  }, [response]);

  return (
    <FormLogin onSubmit={onSubmit}>
      <img src={pujasKitaLogo} alt="" />
      <div>
        <Field
          placeholder={lang('login.email_placeholder')}
          value={email}
          onChange={onEmailChange}
          className={invalidEmail ? 'invalid' : ''}
        />
        <p>{invalidEmail}</p>
      </div>
      <div>
        <Field
          placeholder={lang('login.password_placeholder')}
          value={password}
          onChange={onPasswordChange}
          className={invalidPassword ? 'invalid' : ''}
          type="password"
        />
        <p>{invalidPassword}</p>
      </div>
      <ButtonLogin type="submit" disabled={loading} className={loading ? 'loading' : ''}>
        {loading ? lang('button.loading') : lang('button.login')}
      </ButtonLogin>
      <p>
        {lang('login.register_question')}{' '}
        <Link to={'/register'}>{lang('login.create_here')}</Link>
      </p>
    </FormLogin>
  );
};

export default Login;
