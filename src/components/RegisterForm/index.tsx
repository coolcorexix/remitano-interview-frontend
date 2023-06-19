import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from '../../stores'
import * as Sc from './RegisterForm.styled'
import { Loading } from '../Loading';

export const RegisterForm = observer(function RegisterForm() {
  const { authStore } = useStores();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [displayError, setDisplayError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!displayName) {
      setDisplayError('Display Name is required');
      return;
    }
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
    authStore.register({
      displayName,
      email,
      password
    })
  };

  const handleDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(event.target.value);
    setDisplayError('');
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
    <Sc.FormWrap>
      {authStore.isRegisterLoading ? <Loading /> : (  
        <Sc.FormWrap>
          <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <input type="text" value={displayName} onChange={handleDisplayNameChange} placeholder="Display Name"/>
            {displayError && <div className='err-msg'>{displayError}</div>}
          </div>
          <div className="input-wrap">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Email"/>
            {emailError && <div className='err-msg'>{emailError}</div>}
          </div>
          <div className="input-wrap">
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
            {passwordError && <div className='err-msg'>{passwordError}</div>}
          </div>
          <button type="submit">Register</button>
          {authStore.registerErrorMsg && <p className='err-msg'>{authStore.registerErrorMsg}</p>}
        </form>
        </Sc.FormWrap>
      )}
    </Sc.FormWrap>
  );
});