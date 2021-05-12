import React, { useState } from "react";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setInputValue("");
    }
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
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <input
          type="submit"
          className="btn btn-large btn-warning mx-2"
          value="Search"
        />
      </form>
    </>
  );
};
