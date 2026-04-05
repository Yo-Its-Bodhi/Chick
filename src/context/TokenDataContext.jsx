import { createContext, useContext } from 'react';
import useTokenDataHook from '../hooks/useTokenData';

const TokenDataContext = createContext(null);

export function TokenDataProvider({ children }) {
  const tokenData = useTokenDataHook();
  return (
    <TokenDataContext.Provider value={tokenData}>
      {children}
    </TokenDataContext.Provider>
  );
}

export default function useTokenData() {
  const ctx = useContext(TokenDataContext);
  if (!ctx) throw new Error('useTokenData must be used within TokenDataProvider');
  return ctx;
}
