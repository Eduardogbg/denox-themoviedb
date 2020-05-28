import React from 'react';
import Poster from '../Poster';


const SearchResults = ({ results, totalResults, page, totalPages }) => {
  return (results || null) && (
    <div>
      <div style={{ display: 'flex' }}>
        {results.map(Poster)}
      </div>
      <div>
        <span>{page} - {totalPages}</span>
        <br />
        <span>Exibindo {results.length} de {totalResults}</span>
      </div>
    </div>
  );
}


export default SearchResults;
