import React from 'react';
import ageFromBirthday from '../../../lib/age-from-birthday';
import { SmartImage } from '../../Poster';


const Person = ({ profilePath, name, birthday, ...props }) => {
  console.log(props);

  return (
    <div className="description-container">
      <SmartImage imagePath={profilePath} />
      <div className="description">
        <span className="description-name">{name}</span>
        {birthday && (
          <span className="description-age">{ageFromBirthday(birthday)} anos</span>
        )}
      </div>
    </div>
  );
}


export default Person;
