import { Children, createContext, useContext, useState } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Jun",
  });
  // const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  // const [token, _setToken] = useState("jun");
  const [token, _setToken] = useState(null);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
