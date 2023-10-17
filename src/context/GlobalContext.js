"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [mini_heading, setMiniHeading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        mini_heading,
        setMiniHeading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw Error(
      "useGLobalContext must be used inside an GlobalContextProvider"
    );
  }

  return context;
};
