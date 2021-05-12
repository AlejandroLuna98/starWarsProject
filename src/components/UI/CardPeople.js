import React, { Fragment } from "react";

export const CardPeople = ({ people }) => {
  //   console.log(people);
  return (
    <Fragment>
      <div className="card mx-3 my-1 bg-light col-md-5 ">
        <div className="card-body row">
          <div className="col-md-6">
            <h2 className="card-title text-center py-4">{people.name}</h2>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              <span>Height:</span> {people.height}
            </p>
            <p className="card-text">
              <span>Birth:</span> {people.birth_year}
            </p>

            <p className="card-text">
              <small className="text-mued">More...</small>
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
