import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores'
import * as Sc from './LogInForm.styled'
import { history } from '../../pages/app/BrowserRouter';

interface LoginFormProps {
  isPage?: boolean;
}
export const LogInForm = observer(function LogInForm({isPage = false}: LoginFormProps) {
  const { authStore } = useStores();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    const result: any = await authStore.login({
      email,
      password
    });
    if (isPage && result?.token) {
      history.push('/');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <Sc.FormWrap isPage={isPage}>
      <form onSubmit={handleSubmit}>
      <div className="input-wrap">
        <input type="email" value={email} onChange={handleEmailChange} placeholder="email"/>
        {emailError && <div className='err-msg'>{emailError}</div>}
      </div>
      <div className="input-wrap">
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="password"/>
        {passwordError && <div className='err-msg'>{passwordError}</div>}
      </div>
      <button type="submit">Login</button>
      {authStore.errorMsg && <div className='err-msg'>{authStore.errorMsg}</div>}
    </form>
    </Sc.FormWrap>
  );
});
