import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

// Importing the style file
import '../css/Search.css';

// Creating the search component
const Search = ({ setQuery }) => {

    const [search, setSearch] = useState("");

    return (
        <div className="search">
            <button className='icon' onClick={() => setQuery({ q: search })}><UilSearch/></button>
            <input value={search} onChange={e => setSearch(e.target.value) } type="text" placeholder='Search for cities...' />
        </div>
    )
};

export default Search;