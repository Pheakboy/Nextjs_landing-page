'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { getPersistedState, persistState } from '@/utils/persist-util';

export interface IAppContext {
  globalData: unknown;
  setGlobalData: React.Dispatch<React.SetStateAction<unknown>>;
}

export const AppContext = createContext<IAppContext>({
  globalData: {},
  setGlobalData: () => {},
});

interface AppProps {
  children: React.ReactNode; // best, accepts everything (see edge case below)
}

const persVersionKey = `${process.env.NEXT_PUBLIC_PERSIST_KEY}-VERSION`;
const persDataKey = `${process.env.NEXT_PUBLIC_PERSIST_KEY}-GLOBALDATA`;
export const accPersistKey = 'ACCOUNT_INFO';

export function AppWrapper({ children }: AppProps) {
  const initialMount = useRef(true);

  const [globalData, setGlobalData] = useState<unknown>();

  useEffect(() => {
    const vers = getPersistedState(persVersionKey);
    // console.log('vers', vers);
    if (vers && vers === process.env.NEXT_PUBLIC_PERSIST_VER) {
      const gData = getPersistedState(persDataKey);
      // console.log('gData', gData);
      if (gData) {
        setGlobalData({ ...gData });
      }
    } else {
      // console.log('clear');
      localStorage.clear();
      sessionStorage.clear();
      persistState(persVersionKey, process.env.NEXT_PUBLIC_PERSIST_VER || '');
    }
  }, []);

  useEffect(() => {
    if (!initialMount.current) {
      persistState(persDataKey, globalData || '');
    } else initialMount.current = false;
  }, [globalData]);

  return (
    <AppContext.Provider
      value={{
        globalData,
        setGlobalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
