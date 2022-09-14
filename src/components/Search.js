import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

// Importing the style file
import '../css/Search.css';

// Creating the search component
const Search = () => {
    return (
        <div className="search">
            <button className='icon'><UilSearch/></button>
            <input type="text" placeholder='Search for cities...' />
        </div>
    )
};

export default Search;