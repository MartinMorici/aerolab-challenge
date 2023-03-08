import React, { ReactNode, useEffect, useState } from 'react';
import { User } from '../utils/types';

interface Props {
  children: ReactNode;
}

interface Context {
  user?: User;
  loading: boolean;
  setIsLoading: (loading: boolean) => void;
  setUserState: (user: User) => void;
}

export const UserContext = React.createContext({} as Context);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const setUserState = (user: User) => {
    setUser(user);
  };

  const setIsLoading = (loading: boolean) => {
    setLoading(loading);
  };


  return <UserContext.Provider value={{ user, setUserState, loading, setIsLoading }}>{children}</UserContext.Provider>;
};

export default UserProvider;
