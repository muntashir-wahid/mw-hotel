import { createBrowserRouter } from "react-router-dom";
import AvailableRooms from "../pages/AvailableRooms/AvailableRooms";
import Hero from "../pages/Hero/Hero";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const routes = createBrowserRouter([
  { path: "/", element: <Hero /> },
  { path: "available-rooms", element: <AvailableRooms /> },
  { path: "signin", element: <SignIn /> },
  { path: "signup", element: <SignUp /> },
]);

export default routes;
