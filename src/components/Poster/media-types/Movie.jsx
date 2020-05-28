import React from 'react';
import SmartImage from '../SmartImage';


const Movie = ({ id, posterPath, ...props }) => (
  <div className="poster">
    <SmartImage imagePath={posterPath} />
    <span className="poster-description">
      Filme {id}
    </span>
  </div>
);


export default Movie;
