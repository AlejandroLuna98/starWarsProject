import React from "react";
import { useHistory, useParams } from "react-router";

export const VehiclesScreen = () => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
  } = useParams();
  let history = useHistory();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack("");
    }
  };
  return (
    <>
      <div className="container screens container-screens bordered rounded mt-4  animate__animated  animate__fadeIn">
        <div className="row">
          <h1 className="text-center pt-5">{name}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h5 className="text-center pb-3 screem">
              <span> Model:</span>
              {model}
            </h5>

            <h5 className="text-center pb-3 screem">
              <span>Manufacturer: </span>
              {manufacturer}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Cost in Credits: </span>
              {cost_in_credits}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Length: </span>
              {length}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Max Atmosphering Speed: </span>
              {max_atmosphering_speed}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Crew: </span>
              {crew}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Passengers: </span>
              {passengers}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Cargo Capacity: </span>
              {cargo_capacity}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Consumables: </span>
              {consumables}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Vehicle Class: </span>
              {vehicle_class}
            </h5>
          </div>

          <div className="col-md-6">
            <h2 className="text-center pb-3">Description:</h2>
            <p className=" text-center mb-5 me-md-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nibh quis ligula semper tempor. Nulla quis turpis quis
              diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
              pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
              pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
              velit sapien, tempus et quam in, ultrices sollicitudin tellus.
              Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
              lacinia orci ac felis dictum mattis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent viverra nibh quis ligula
              semper tempor. Nulla quis turpis quis diam sodales iaculis. Duis
              id luctus mi. Praesent sollicitudin pretium elit quis bibendum.
              Nullam ut nunc ipsum. Pellentesque non pharetra est. Quisque eu
              eros vel lorem tristique sodales. Aenean velit sapien, tempus et
              quam in, ultrices sollicitudin tellus. Vivamus vehicula porttitor
              lacus suscipit fringilla. Maecenas lacinia orci ac felis dictum
              mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent viverra nibh quis ligula semper tempor. Nulla quis turpis
              quis diam sodales iaculis. Duis id luctus mi. Praesent
              sollicitudin pretium elit quis bibendum. Nullam ut nunc ipsum.
              Pellentesque non pharetra est. Quisque eu eros vel lorem tristique
              sodales. Aenean velit sapien, tempus et quam in, ultrices
              sollicitudin tellus. Vivamus vehicula porttitor lacus suscipit
              fringilla. Maecenas lacinia orci ac felis dictum mattis. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              viverra nibh quis ligula semper tempor. Nulla quis turpis quis
              diam sodales iaculis. Duis id luctus mi. Praesent sollicitudin
              pretium elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non
              pharetra est. Quisque eu eros vel lorem tristique sodales. Aenean
              velit sapien, tempus et quam in, ultrices sollicitudin tellus.
              Vivamus vehicula porttitor lacus suscipit fringilla. Maecenas
              lacinia orci ac felis dictum mattis.
            </p>
          </div>
          <button
            className="btn btn-dark  justify-content-center py-2 mb-3 "
            onClick={handleReturn}
          >
            Return
          </button>
        </div>
      </div>
    </>
  );
};
