import { makeAutoObservable } from 'mobx';

import { localStorage } from '../helpers/localStorage';
import { User } from '../apis/models/User'

export class UserStore {
  userInfo: User | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getUserInfo();
  }

  getUserInfo() {
    const user = localStorage.get('user');
    if (user) {
      this.userInfo = JSON.parse(user);
    }
    return this.userInfo;    
  }

}