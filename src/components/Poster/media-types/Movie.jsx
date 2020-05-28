import React from 'react';
import SmartImage from '../SmartImage';


const Movie = ({ posterPath }) => (
  <SmartImage imagePath={posterPath} />
);


export default Movie;
