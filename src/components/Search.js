import React, { useRef } from "react";
import { UilSearch } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Search.css";

// Creating the search component
const Search = ({ query }) => {
  // setting up refs
  const searchRef = useRef();

  // Function that will fetch the weather info for the requested city
  const handleSubmit = (e) => {
    e.preventDefault();
    query({ q: searchRef.current.value });
    searchRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <UilSearch />
      </button>
      <input type="text" placeholder="Search for cities..." ref={searchRef} />
    </form>
  );
};

// Exporting the Search component
export default Search;
