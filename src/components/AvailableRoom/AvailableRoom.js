import React from "react";

const AvailableRoom = ({ roomData, onShowRoomDetails }) => {
  const { id, picture, name, about } = roomData;

  return (
    <div className="card bg-base-100 shadow-xl justify-self-center">
      <figure className="px-10 pt-10">
        <img src={picture} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{about}</p>
        <div className="card-actions">
          <button
            onClick={onShowRoomDetails.bind(null, id)}
            className="btn btn-primary"
          >
            Viwe Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoom;
