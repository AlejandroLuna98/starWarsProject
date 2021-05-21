import React, { useEffect, useState } from "react";
import { Search } from "./UI/Search";
export const Home = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      if (search === "") return;
      const urlRoot = `https://swapi.dev/api/${search}`;
      const res = await fetch(urlRoot);
      const result = await res.json();
      console.log(result);
    };
    fetchSearch();
  }, [search]);
  return (
    <>
      <div className="container container-screens rounded  my-3 animate__animated animate__fadeIn ">
        <div className="row my-2 py-3">
          <h1 className="text-center ">Wiki Star Wars</h1>
        </div>
        <div className="row py-4 "></div>
        <div className="row mb-5">
          <h2 className="text-white text-center ">What do you see?</h2>
          <Search setSearch={setSearch} />
        </div>
        <div className="row py-4">
          <div className="col-2"></div>
          <p className=" text-white  text-center col-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            viverra nibh quis ligula semper tempor. Nulla quis turpis quis diam
            sodales iaculis. Duis id luctus mi. Praesent sollicitudin pretium
            elit quis bibendum. Nullam ut nunc ipsum. Pellentesque non pharetra
            est. Quisque eu eros vel lorem tristique sodales. Aenean velit
            sapien, tempus et quam in, ultrices sollicitudin tellus. Vivamus
            vehicula porttitor lacus suscipit fringilla. Maecenas lacinia orci
            ac felis dictum mattis.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent viverra nibh quis ligula semper tempor.
            Nulla quis turpis quis diam sodales iaculis.pit fringilla. Maecenas
            lacinia orci ac felis dictum mattis.
          </p>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};
