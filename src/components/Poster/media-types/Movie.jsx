import React from 'react';
import SmartImage from '../SmartImage';


const Movie = ({ title, posterPath, ...props }) => (
  <div className="poster">
    <SmartImage imagePath={posterPath} />
    <span className="poster-description">
      {title}
    </span>
  </div>
);


export default Movie;
