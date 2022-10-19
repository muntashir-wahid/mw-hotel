import React from "react";
import { useLoaderData } from "react-router-dom";
import AvailableRoom from "../../components/AvailableRoom/AvailableRoom";

const AvailableRooms = () => {
  const availableRooms = useLoaderData();

  const showRoomDetailsHandler = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-5 px-3">Our Available Rooms</h2>
      <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {availableRooms.map((availableRoom) => (
          <AvailableRoom
            key={availableRoom.id}
            roomData={availableRoom}
            onShowRoomDetails={showRoomDetailsHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailableRooms;
