export const localStorage = {
  set<T = any>(key: string, value: T) {
    if (!window.localStorage) {
      return;
    }

    try {
      return window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`[LocalStorage.save] cannot save ${key}.`);
    }
  },

  get<T = any>(key: string) {
    if (!window.localStorage) {
      return null;
    }

    try {
      const value = window.localStorage.getItem(key);

      if (!value) {
        return null;
      }

      return JSON.parse(value) as T;
    } catch (err) {
      console.error(`[LocalStorage.get] cannot get ${key}.`);
      return null;
    }
  },

  getItem<T = any>(key: string) {
    if (!window.localStorage) {
      return null;
    }

    return window.localStorage.getItem(key);
  },

  remove(key: string) {
    if (!window.localStorage) {
      return;
    }

    try {
      return window.localStorage.removeItem(key);
    } catch (err) {
      console.error(`[LocalStorage.remove] cannot remove ${key}.`);
    }
  },

  clear() {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.clear();
  },
};
