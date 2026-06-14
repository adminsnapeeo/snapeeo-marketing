import { createContext, useContext } from 'react';
import type { AppContextValue } from '../types';

export const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppContext.Provider');
  }
  return ctx;
}
