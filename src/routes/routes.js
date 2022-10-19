import { createBrowserRouter } from "react-router-dom";
import AvailableRooms from "../pages/AvailableRooms/AvailableRooms";
import Hero from "../pages/Hero/Hero";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  { path: "/", element: <Hero /> },
  {
    path: "available-rooms",
    element: <AvailableRooms />,
    loader: () => fetch("/hotel-data/available-rooms.json"),
  },
  {
    path: "room-details/:roomId",
    element: (
      <PrivateRoute>
        <RoomDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`/hotel-data/room-details/${params.roomId}.json`),
  },
  { path: "signin", element: <SignIn /> },
  { path: "signup", element: <SignUp /> },
]);

export default routes;
