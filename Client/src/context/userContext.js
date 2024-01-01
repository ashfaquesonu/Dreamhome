import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const initialUser = JSON.parse(localStorage.getItem('userInfo')) || null;
  const [user, setUser] = useState(initialUser);

  const updateMyState = (newValue) => {
    setUser(newValue);
  };

  return (
    <MyContext.Provider value={{ user, updateMyState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
