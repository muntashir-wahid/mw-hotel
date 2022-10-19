import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const defaultContext = { user: {}, createUser: () => {}, signIn: () => {} };

export const AuthContext = createContext(defaultContext);

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const user = { displayName: "Muntashir Wahid" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
