import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../store/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="w-100 h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
