"use client";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const [signupObject, setSignupObject] = useState({
    user_username: "",
    user_email: "",
    account_type: "office",
    user_access_key: "",
    access_key: "",
    user_id: "",
    username: "",
    email: "",
    vertueal: "",
    description: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        signupObject,
        setSignupObject,
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
