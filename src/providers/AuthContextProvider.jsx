import React from "react";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {
    token: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
