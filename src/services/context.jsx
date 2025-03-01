import { createContext, useState } from "react";

export const MyContext = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState("emmanuel");
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};
