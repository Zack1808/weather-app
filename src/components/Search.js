import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Search.css";

// Creating the search component
const Search = () => {
  return (
    <form>
      <button type="submit">
        <UilSearch />
      </button>
      <input type="text" placeholder="Search for cities..." />
    </form>
  );
};

// Exporting the Search component
export default Search;
