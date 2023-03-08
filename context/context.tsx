import React, { ReactNode, useEffect, useState } from 'react';
import { User } from '../utils/types';

interface Props {
  children: ReactNode;
}

interface Context {
  user?: User;
  loading: boolean;
  showCoins: boolean;
  setIsLoading: (loading: boolean) => void;
  setUserState: (user: User) => void;
  setShowAddCoins: (showAddCoins : boolean) => void;
}

export const UserContext = React.createContext({} as Context);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCoins, setShowCoins] = useState<boolean>(false)

  const setUserState = (user: User) => {
    setUser(user);
  };

  const setIsLoading = (loading: boolean) => {
    setLoading(loading);
  };

  const setShowAddCoins = (showCoins : boolean) => {
    setShowCoins(showCoins)
  }


  return <UserContext.Provider value={{ user, setUserState, loading, setIsLoading, setShowAddCoins, showCoins }}>{children}</UserContext.Provider>;
};

export default UserProvider;
