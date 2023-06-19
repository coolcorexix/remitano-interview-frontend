import { flow, makeAutoObservable } from 'mobx';

import { LogInResponse } from '../apis/models/LogInResponse';
import { LogInParams } from '../apis/models/LogInParams';

import { User } from '../apis/models/User';
import { RegisterParams } from '../apis/models/RegisterParams';
import { authService } from '../apis/authService';
import { localStorage } from '../helpers/localStorage';
import { history } from '../pages/app/BrowserRouter';

export class AuthStore {
  isLogged = false;
  isLoading = false;
  errorMsg = "";
  isRegisterLoading = false;
  registerErrorMsg = "";

  constructor() {
    makeAutoObservable(this);
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  }

  login = flow(function* (this: AuthStore, payload: LogInParams) {
    this.isLoading = true;

    try {
      const result: LogInResponse = yield authService.logIn(payload);
      if (result.token) {
        this.isLogged = true;
        this.errorMsg = "";
        localStorage.set('token', JSON.stringify(result.token));
        localStorage.set('user', JSON.stringify(result.user));
      }
      return {
        token: result.token,
        user: result.user
      }
    } catch (error: any) {
      this.errorMsg = error?.data?.error || 'Somethings went wrong, please try again';
    }
    finally {
      this.isLoading = false;
    }
  });

  register = flow(function* (this: AuthStore, payload: RegisterParams) {
    this.isRegisterLoading = true;

    try {
      const result: User = yield authService.register(payload);
      if (result.email) {
        this.registerErrorMsg = "";
        const logInParams = {
          email: payload.email,
          password: payload.password
        };
        yield this.login(logInParams);
        history.push('/');
      }
    } catch (error: any) {
      this.registerErrorMsg = error?.data?.message || 'Somethings went wrong, please try again';
    }
    finally {
      this.isRegisterLoading = false;
    }
  });

  logout = (function (this: AuthStore) {
    this.isLogged = false;
    localStorage.clear();
    history.push('/');
  });
}