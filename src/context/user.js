import React, { createContext, useState } from "react";

const UserContext = createContext();
function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const userLogin = user => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "success"
  });
  const showAlert = ({ message, type = "success" }) => {
    setAlert({ show: true, message, type });
  };
  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };
  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
