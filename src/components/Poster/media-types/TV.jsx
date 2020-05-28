import React from 'react';
import SmartImage from '../SmartImage';


const TV = ({ name, posterPath, ...props }) => (
  <div className="poster">
    <SmartImage imagePath={posterPath} />
    <span className="poster-description">
      {name}
    </span>
  </div>
);


export default TV;
