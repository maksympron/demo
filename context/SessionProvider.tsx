import React from 'react';
import { useStorageState } from '@/hooks/useStorageState';

const AuthContext = React.createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  onboarded: boolean;
  setOnboarded: (value: boolean) => void;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  onboarded: false,
  setOnboarded: () => null,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (!value) throw new Error('useSession must be wrapped in a <SessionProvider />');
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [[onboardedString], setOnboardedStorage] = useStorageState('onboarded');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession('xxx');
          setOnboardedStorage('false');
        },
        signOut: () => {
          setSession(null);
          setOnboardedStorage('false');
        },

        session,
        isLoading,

        // convert stored string → boolean
        onboarded: onboardedString === 'true',

        // wrapper converts boolean → string
        setOnboarded: (value: boolean) => {
          setOnboardedStorage(String(value));
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
