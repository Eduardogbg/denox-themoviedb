import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ search, onTyping }) => (
  <div className="search-bar-container">
    <input
      type="text"
      value={search}
      className="search-bar"
      onChange={e => onTyping(e.target.value)} />
    <FontAwesomeIcon icon={faSearch} color="grey" />
  </div>
);


export default SearchBar;
