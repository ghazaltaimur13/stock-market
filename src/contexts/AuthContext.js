import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext({});

const AuthProvider = (props) => {
  let authTokenFromLocalStorage;
  let usernameFromLocalStorage;
  let currencyFromLocalStorage;

  try {
    authTokenFromLocalStorage = JSON.parse(
      JSON.stringify(localStorage.getItem("accessToken"))
    );
    usernameFromLocalStorage = JSON.parse(
      JSON.stringify(localStorage.getItem("username"))
    );
    currencyFromLocalStorage = JSON.parse(
      JSON.stringify(localStorage.getItem("currency"))
    );
  } catch (e) {
    console.log(e);
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(authTokenFromLocalStorage || "");
  const [username, setUsername] = useState(usernameFromLocalStorage || "");
  const [currency, setCurrency] = useState(currencyFromLocalStorage || "USD");

  useEffect(() => {
    if (authToken && username) {
      login();
    }
  }, []);

  useEffect(() => {
    if(!authToken) return;
    localStorage.setItem("accessToken", authToken);
  }, [authToken]);

  useEffect(() => {
    if(!username) return;
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    if(!currency) return;
    localStorage.setItem("currency", currency);
  }, [currency]);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    //clear the user data
    setLoggedIn(false);
    setAuthToken(null);
    setUsername(null);
    setCurrency(null);
	  var i18nextLng = localStorage.getItem('i18nextLng');
    localStorage.clear();
	  localStorage.setItem("i18nextLng", i18nextLng);
  };

  const authContextValue = {
    login,
    logout,
    loggedIn,
    authToken,
    setAuthToken,
    username,
    setUsername,
    currency,
    setCurrency
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
