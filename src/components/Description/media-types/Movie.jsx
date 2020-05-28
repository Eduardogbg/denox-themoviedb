import React from 'react';
import { SmartImage } from '../../Poster';


const Movie = ({ posterPath }) => {
  return <SmartImage imagePath={posterPath} />;
}


export default Movie;
