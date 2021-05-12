import React, { Fragment } from "react";

export const Card = ({ people }) => {
  //   console.log(people);
  return (
    <React.Fragment>
      <div className=" card ms-3 my-1 bg-light col-md-5">
        <div className="card-body row">
          <div className="col-6">
            <h2 className="card-title">{people.name}</h2>
          </div>
          <div className="col-6">
            <p className="card-text">Height: {people.height}</p>
            <p className="card-text">Birth: {people.birth}</p>
            <p className="card-text">
              <small className="text-mued">More...</small>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
