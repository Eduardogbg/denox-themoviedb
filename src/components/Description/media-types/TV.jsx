import React from 'react';
import { SmartImage } from '../../Poster';


const TV = ({ posterPath, name, firstAirDate, numberOfSeasons }) => {
  const localeFirstAirDate = new Date(firstAirDate).toLocaleDateString();

  return (
    <div className="description-container">
      <SmartImage imagePath={posterPath} />
      <div className="description">
        <span className="description-name">{name}</span>
        <span className="description-first-air-date">{localeFirstAirDate}</span>
        <span className="description-number-of-seasons">
          {numberOfSeasons} temporadas
        </span>
      </div>
    </div>
  );
}


export default TV;
