import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const altro = () => {
    setUsers((prevUsers) => [...prevUsers, users]);
  };

  return (
    <UserContext.Provider value={{ users, altro }}>
      {children}
    </UserContext.Provider>
  );
};
// da rivedere
