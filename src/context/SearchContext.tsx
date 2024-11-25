'use client'

import { createContext, useContext, useState } from 'react';

interface AppContextType {
  state1: string;
  setState1: (value: string) => void;
  state2: number;
  setState2: (value: number) => void;
  state3: boolean;
  setState3: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state1, setState1] = useState<string>('');
  const [state2, setState2] = useState<number>(0);
  const [state3, setState3] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
      state1, setState1,
      state2, setState2,
      state3, setState3
    }}>
      {children}
    </AppContext.Provider>
  );
}

// 커스텀 훅으로 만들어 사용
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
