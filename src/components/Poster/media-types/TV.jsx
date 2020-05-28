import React from 'react';
import SmartImage from '../SmartImage';


const TV = ({ id, posterPath, ...props }) => (
  <div className="poster">
    <SmartImage imagePath={posterPath} />
    <span className="poster-description">
      Série {id}
    </span>
  </div>
);


export default TV;
