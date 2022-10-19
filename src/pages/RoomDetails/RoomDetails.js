import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../store/UserContext";
import "react-toastify/dist/ReactToastify.css";

const RoomDetails = () => {
  const { user, logOut } = useContext(AuthContext);
  const data = useLoaderData();

  const { name, picture, about, bed, capacity, perNight } = data;

  const signOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const bookingConfirmHandler = () => {
    toast.success("Congratulations!Booking confirm", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="mt-5">
      <div className="mb-20 flex flex-col items-end p-6">
        <p className="border p-2 mb-2">{user.email}</p>
        <button
          onClick={signOutHandler}
          className="btn btn-outline btn-primary"
        >
          Sign Out
        </button>
      </div>
      <h2 className="text-center text-3xl font-semibold mb-16">
        Details about {name}
      </h2>
      <div className="m-8 card xl:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="grow-0">{about}</p>
          <div className="space-y-1.5">
            <p>Bed(s): {bed}</p>
            <p>Capacity: {capacity}</p>
            <p>Per Night: {perNight}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={bookingConfirmHandler} className="btn btn-primary">
              Book Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
