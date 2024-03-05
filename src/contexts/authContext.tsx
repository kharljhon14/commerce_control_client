import { PropsWithChildren, createContext, useContext, useState } from 'react';

export type AuthState = 'sign-in' | 'sign-up' | 'forgot-password';

interface AuthContextState {
  state: AuthState;
  handleState: (state: AuthState) => void;
}

export const AuthContext = createContext<AuthContextState | undefined>(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) throw Error('Must be inside of a provider');

  return context;
}

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AuthState>('sign-in');

  const handleState = (newState: AuthState) => {
    setState(newState);
  };

  return <AuthContext.Provider value={{ state, handleState }}>{children}</AuthContext.Provider>;
}
