import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export const CardPeople = ({ people }) => {
  let {
    name,
    birth_year,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    gender,
  } = people;

  return (
    <Fragment>
      <div className="card mx-3 my-1 bg-light col-md-5 mb-4">
        <div className="card-body row">
          <div className="col-md-6">
            <h2 className="card-title text-center py-4">{name}</h2>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <span>Height:</span> {height}
            </p>
            <p className="card-text">
              <span>Birth:</span> {birth_year}
            </p>

            <p className="card-text">
              <Link
                className="btn btn-dark"
                to={`./people/${name}/${birth_year}/${height}/${hair_color}/${skin_color}/${mass}/${eye_color}/${gender}`}
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
