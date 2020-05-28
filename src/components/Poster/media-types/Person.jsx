import React from 'react';
import SmartImage from '../SmartImage';


const Person = ({ id, profilePath }) => (
  <div className="poster">
    <SmartImage imagePath={profilePath} />
    <span className="poster-description">
      Pessoa {id}
    </span>
  </div>
);


export default Person;
