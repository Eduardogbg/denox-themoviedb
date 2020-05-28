import React from 'react';
import { SmartImage } from '../../Poster';


const Movie = ({ posterPath, title, releaseDate, voteCount }) => {
  const localeReleaseDate = new Date(releaseDate).toLocaleDateString();
  
  return (
    <div className="description-container">
      <SmartImage imagePath={posterPath} />
      <div className="description">
        <span className="description-title">{title}</span>
        <span className="description-release-date">{localeReleaseDate}</span>
        <span className="description-review">Avaliação: {voteCount}/10</span>
      </div>
    </div>
  );
}


export default Movie;
