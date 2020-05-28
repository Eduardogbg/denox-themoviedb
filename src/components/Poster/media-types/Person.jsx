import React from 'react';
import SmartImage from '../SmartImage';


const Person = ({ name, profilePath }) => (
  <div className="poster">
    <SmartImage imagePath={profilePath} />
    <span className="poster-description">
      {name}
    </span>
  </div>
);


export default Person;
