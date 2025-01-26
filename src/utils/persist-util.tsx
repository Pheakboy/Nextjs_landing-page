export const persistState = (storageKey: string, state: object | string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }
};

export const getPersistedState = (storageKey: string) => {
  if (typeof window !== 'undefined') {
    const savedState = window.localStorage.getItem(storageKey);
    try {
      if (!savedState) {
        return undefined;
      }
      return JSON.parse(savedState);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
};

export const persistSessionState = (
  storageKey: string,
  state: object | string,
) => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(storageKey, JSON.stringify(state));
  }
};

export const getPersistedSessionState = (storageKey: string) => {
  if (typeof window !== 'undefined') {
    const savedState = window.sessionStorage.getItem(storageKey);
    try {
      if (!savedState) {
        return undefined;
      }
      return JSON.parse(savedState);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
};
