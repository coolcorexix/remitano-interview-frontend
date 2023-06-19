import React from 'react';
import { AuthStore } from './AuthStore';
import { UserStore } from './UserStore';
import { VideoStore } from './VideoStore';

class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  videoStore: VideoStore;

  constructor() {
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
    this.videoStore = new VideoStore();
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);
