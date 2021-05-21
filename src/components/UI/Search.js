import React, { useState } from "react";
import { Error } from "./Error";

export const Search = ({ setSeatch }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSeatch(inputValue);
  };
  return (
    <>
      <form
        className="m-0 p-0  d-flex  py-1  d-flex d-flex justify-content-center "
        onSubmit={handleSubmit}
      >
        <input
          className=" w-50  p-1"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
        <input
          type="submit"
          className="btn btn-large btn-warning mx-2"
          value="Search"
        />
      </form>
      {error ? <Error /> : null}
    </>
  );
};
