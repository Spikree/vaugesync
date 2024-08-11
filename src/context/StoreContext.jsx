import { createContext, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [user, setUser] = useState("");

  const contextValue = {
    user,
    setUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
