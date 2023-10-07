import { createContext, useState } from "react";

const UserContext = createContext({
  username: "",
  setUserName: (username) => {},
  admin: false,
  // setAdmin: () => {},
  token: "",
  isUserLogedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const ContextProvider = (props) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [username, setUserName] = useState("");
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  const userIsLoggedIn = !!token;

  const usernameValue = username;

  const setUserNameHandler = (username) => {
    if (username === "admin") {
      setIsUserAdmin(true);
      setUserName(username);
    } else {
      setUserName(username);
    }
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    admin: isUserAdmin,
    username: usernameValue,
    setUsername: setUserNameHandler,
    token: token,
    isUserLogedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
