import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import pujasKitaLogo from '../../assets/pujaskitalogo.png';
import { BottomSheet } from '../../components';
import { validateEmailFormat, validatePhoneNumberFormat } from '../../helpers';
import { IRegister } from '../../interface';
import { authService } from '../../service';
import { lang } from '../../utils';
import {
  ButtonActionWrapper,
  ButtonBack,
  ButtonConfirm,
  ButtonRegister,
  Description,
  Field,
  FormRegister,
  SuccessBottomSheet,
} from './RegisterPageStyle';
import SuccessIcon from './successIcon';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [invalidName, setInvalidName] = useState<string>('');
  const [invalidEmail, setInvalidEmail] = useState<string>('');
  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState<string>('');
  const [invalidPassword, setInvalidPassword] = useState<string>('');
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState<string>('');
  const [registerData, setRegisterData] = useState<IRegister>({
    name,
    email,
    password,
    phoneNumber,
  });
  const [isBtmSheet, setIsBtmSheet] = useState<boolean>(false);
  const { response, error, loading, request } = authService.register(registerData);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidName('');
    setName(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidEmail('');
    setEmail(event.target.value);
  };

  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidPhoneNumber('');
    setPhoneNumber(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidPassword('');
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidConfirmPassword('');
    setConfirmPassword(event.target.value);
  };

  const validateRequest = () => {
    let hasErr = false;
    if (name === '') {
      setInvalidName(lang('register.err_empty_name'));
      hasErr = true;
    }
    if (email === '') {
      setInvalidEmail(lang('register.err_empty_email'));
      hasErr = true;
    }
    if (email !== '' && !validateEmailFormat(email)) {
      setInvalidEmail(lang('register.err_invalid_email'));
      hasErr = true;
    }
    if (phoneNumber === '') {
      setInvalidPhoneNumber(lang('register.err_empty_phone_number'));
      hasErr = true;
    }
    if (phoneNumber !== '' && !validatePhoneNumberFormat(phoneNumber)) {
      setInvalidPhoneNumber(lang('register.err_invalid_phone_number'));
      hasErr = true;
    }
    if (password === '') {
      setInvalidPassword(lang('register.err_empty_password'));
      hasErr = true;
    }
    if (password !== '' && password.length < 8) {
      setInvalidPassword(lang('register.err_short_password'));
      hasErr = true;
    }
    if (confirmPassword === '') {
      setInvalidConfirmPassword(lang('register.err_empty_password'));
      hasErr = true;
    }
    if (confirmPassword !== password) {
      setInvalidConfirmPassword(lang('register.err_password_not_match'));
      hasErr = true;
    }
    return hasErr;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateRequest()) return;
    request();
  };

  const onClose = () => {
    setIsBtmSheet(false);
  };

  const onConfirm = () => {
    navigate('/login');
  };

  useEffect(() => {
    setRegisterData({
      name,
      email,
      password,
      phoneNumber,
    });
  }, [name, email, password, phoneNumber]);

  useEffect(() => {
    if (error?.includes('email already exists')) {
      setInvalidEmail(lang('register.err_email_exists'));
    }
    if (error?.includes('phone number already exists')) {
      setInvalidPhoneNumber(lang('register.err_phone_number_exists'));
    }
  }, [error]);

  useEffect(() => {
    if (response?.meta.code === 200) {
      setIsBtmSheet(true);
    }
  }, [response]);

  return (
    <>
      <FormRegister onSubmit={onSubmit}>
        <img src={pujasKitaLogo} alt="" />
        <div>
          <Field
            placeholder={lang('register.name_placeholder')}
            value={name}
            onChange={onNameChange}
            className={invalidName ? 'invalid' : ''}
          />
          <p>{invalidName}</p>
        </div>
        <div>
          <Field
            placeholder={lang('register.email_placeholder')}
            value={email}
            onChange={onEmailChange}
            className={invalidEmail ? 'invalid' : ''}
          />
          <p>{invalidEmail}</p>
        </div>
        <div>
          <Field
            placeholder={lang('register.phone_number_placeholder')}
            value={phoneNumber}
            onChange={onPhoneNumberChange}
            className={invalidPhoneNumber ? 'invalid' : ''}
          />
          <p>{invalidPhoneNumber}</p>
        </div>
        <div>
          <Field
            placeholder={lang('register.password_placeholder')}
            value={password}
            onChange={onPasswordChange}
            className={invalidPassword ? 'invalid' : ''}
            type="password"
          />
          <p>{invalidPassword}</p>
        </div>
        <div>
          <Field
            placeholder={lang('register.confirm_password_placeholder')}
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            className={invalidConfirmPassword ? 'invalid' : ''}
            type="password"
          />
          <p>{invalidConfirmPassword}</p>
        </div>
        <ButtonRegister
          type="submit"
          disabled={loading}
          className={loading ? 'loading' : ''}
        >
          {loading ? lang('button.loading') : lang('button.register')}
        </ButtonRegister>
        <p>
          {lang('register.login_question')}{' '}
          <Link to={'/login'}>{lang('register.login_here')}</Link>
        </p>
      </FormRegister>

      <BottomSheet active={isBtmSheet} onClose={onClose}>
        <SuccessBottomSheet className={isBtmSheet ? 'active' : ''}>
          <SuccessIcon />
          <Description>
            <p>{lang('register.register_success')}</p>
            <p>{lang('register.register_success_desc')}</p>
          </Description>
          <ButtonActionWrapper>
            <ButtonBack onClick={onClose}>{lang('button.cancel')}</ButtonBack>
            <ButtonConfirm onClick={onConfirm}>{lang('button.login')}</ButtonConfirm>
          </ButtonActionWrapper>
        </SuccessBottomSheet>
      </BottomSheet>
    </>
  );
};

export default Register;
