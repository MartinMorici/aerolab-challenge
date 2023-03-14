import React, { ReactNode, useEffect, useState } from 'react';
import { User, Product } from '../utils/types';

interface Props {
  children: ReactNode;
}

interface Context {
  user?: User;
  page: number;
  products?: Product[];
  currentProducts?: Product[];
  loading: boolean;
  showCoins: boolean;
  setIsLoading: (loading: boolean) => void;
  setUserState: (user: User) => void;
  setShowAddCoins: (showAddCoins : boolean) => void;
  setTotalProducts: (product: Product[]) => void;
  setActualProducts: (product: Product[]) => void;
  setCurrentPage: (page: number) => void;
}

export const UserContext = React.createContext({} as Context);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [products,setProducts] = useState<Product[] | undefined>(undefined)
  const [page, setPage] = useState<number>(1)
  const [currentProducts, setCurrentProducts] = useState<Product[] | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true);
  const [showCoins, setShowCoins] = useState<boolean>(false)


  const setUserState = (user: User) => {
    setUser(user);
  };
  const setTotalProducts = (products: Product[]) => {
    setProducts(products)
  };
  const setActualProducts = (products: Product[]) => {
    setCurrentProducts(products)
  };
  const setCurrentPage = (page : number) => {
    setPage(page)
  }
  const setIsLoading = (loading: boolean) => {
    setLoading(loading);
  };
  const setShowAddCoins = (showCoins : boolean) => {
    setShowCoins(showCoins)
  }



  return <UserContext.Provider value={{ user, setUserState, loading, setIsLoading, setShowAddCoins, showCoins, setTotalProducts,products, setActualProducts, currentProducts, page, setCurrentPage }}>{children}</UserContext.Provider>;
};

export default UserProvider;
