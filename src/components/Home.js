import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
export const Home = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setSearch(inputValue);
  };
  useEffect(() => {
    const fetchSearch = async () => {
      if (search === "") return;
      const urlRoot = `https://swapi.dev/api/${search}`;
      const res = await fetch(urlRoot);
      const result = await res.json();
      setData(result);
    };
    setLoading(true);
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
          <form
            className="m-0 p-0  d-flex  py-1  d-flex d-flex justify-content-center "
            onSubmit={handleSubmit}
          >
            <div className="btn btn-large btn-dark">https://swapi.dev/api/</div>
            <input
              className=" w-50  p-1"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="people/1"
            />
            <input
              type="submit"
              className="btn btn-large btn-warning mx-2"
              value="Search"
            />
          </form>
        </div>
        <div className="row py-4">
          <div className="col-12 col-md-12 bg-white ">
            <p className="text-black">
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-4 col-12">
            <h3 className=" text-white  text-center ">What is this?</h3>
            <p className="text-white">
              The Star Wars API, or "swapi" (Swah-pee) is the world's first
              quantified and programmatically-accessible data source for all the
              data from the Star Wars canon universe! We've taken all the rich
              contextual stuff from the universe and formatted into something
              easier to consume with software. Then we went and stuck an API on
              the front so you can access it all!
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className=" text-white  text-center ">How can I use it?</h3>
            <p className="text-white">
              TAll the data is accessible through our HTTP web API. Consult our
              documentation if you'd like to get started. Helper libraries for
              popular programming languages are also provided so you can consume
              swapi in your favourite programming language, in a style that
              suits you.
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className=" text-white  text-center ">
              What happened with old swapi.co?
            </h3>
            <p className="text-white">
              swapi.co is not supported and maintained anymode. But since so
              many projects and tutorials used it as their educational
              playground, this is an "unofficial" branch This project is open
              source and you can contribute on GitHub.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
