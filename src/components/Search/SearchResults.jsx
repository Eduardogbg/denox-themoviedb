import React from 'react';
import { chunk } from 'lodash-es';
import Poster from '../Poster';


const MetaData = ({ page, totalPages, results, totalResults }) => (
  <div className="search-meta-data">
    <span>{page} - {totalPages}</span>
    <br />
    <span>Exibindo {results.length} de {totalResults}</span>
  </div>
);

const SearchResults = props => {
  const { results, totalResults } = props;
  const rows = chunk(results, 5);

  return (results || null) && (
    <div>
      <MetaData {...props} />
      <div className="results-grid">
        {rows.map(row => (
          <div className="results-row">
            {row.map(result => (
              <Poster key={result.mediaType + result.id} {...result} />
            ))}
          </div>
        ))}
      </div>
      {totalResults ? (
        <MetaData {...props} />
      ) : null}
    </div>
  );
}


export default SearchResults;
