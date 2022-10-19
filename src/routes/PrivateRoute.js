import React, { useContext } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import { AuthContext } from "../store/UserContext";

const PrivateRoute = () => {
  const data = useLoaderData();
  const { user, isLoading } = useContext(AuthContext);
  console.log(user);
  console.log(isLoading);

  if (!isLoading) {
    <h1>Loading...</h1>;
  }

  if (user && !isLoading) {
    return <RoomDetails data={data} />;
  }

  return <Navigate to="/signin" />;
};

export default PrivateRoute;
