import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const CardStarShips = ({ starShips }) => {
  let {
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
    hyperdrive_rating,
    MGLT,
    starship_class,
  } = starShips;

  if (passengers == "n/a" || max_atmosphering_speed == "n/a") {
    passengers = "none";
    max_atmosphering_speed = "none";
    // model = "none";
  }

  return (
    <Fragment>
      <div className="card mx-3 my-1 bg-light col-md-5 mb-4">
        <div className="card-body row">
          <div className="col-md-6">
            <h2 className="card-title text-center py-4">{name}</h2>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <span>Modelo:</span> {model}
            </p>
            <p className="card-text">
              <span>Manufacturer:</span> {manufacturer}
            </p>

            <p className="card-text">
              <Link
                className="btn btn-dark"
                to={`./Starships/${name}/${model}/${manufacturer}/${cost_in_credits}/${length}/${max_atmosphering_speed}/${crew}/${passengers}/${cargo_capacity}/${consumables}/${hyperdrive_rating}/${MGLT}/${starship_class}`}
              >
                More
              </Link>
            </p>
          </div>
        </div>
        <div className="card-body row">
          <div className="col-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            viverra nibh quis ligula semper tempor. Nulla quis turpis quis diam
            sodales iaculis. Duis id luctus mi. Praesent sollicitudin pretium
            elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non pharetra
            est. Quisque eu eros vel lorem tristique sodales. Aenean velit
            sapien, tempus et quam in, ultrices sollicitudin tellus. Vivamus
            vehicula porttitor lacus suscipit fringilla. Maecenas lacinia orci
            ac felis dictum mattis.
          </div>
        </div>
      </div>
    </Fragment>
  );
};
