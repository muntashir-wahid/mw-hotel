import React from "react";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const data = useLoaderData();
  const { name, picture, about, bed, capacity, perNight } = data;

  return (
    <div className="mt-20">
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
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
