import React from "react";
import { useParams } from "react-router";

export const PlanetsScreen = () => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = useParams();

  return (
    <>
      <div className="container screens container-screens bordered rounded mt-4  animate__animated  animate__fadeIn">
        <div className="row">
          <h1 className="text-center pt-5">{name}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h5 className="text-center pb-3 screem">
              <span>Rotation Period:</span> {rotation_period}
            </h5>

            <h5 className="text-center pb-3 screem">
              <span>Orbital Period:</span> {orbital_period}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Diameter:</span> {diameter}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Climate:</span> {climate}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Gravity:</span> {gravity}
            </h5>

            <h5 className="text-center pb-3 screem">
              <span>Surface Water:</span> {surface_water}
            </h5>
            <h5 className="text-center pb-3 screem">
              <span>Population:</span> {population}
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
        </div>
      </div>
    </>
  );
};
