import React, { useState, useEffect } from 'react';
import ageFromBirthday from '../../../lib/age-from-birthday';
import { getMovieCredits } from '../../../lib/api-service';
import { SmartImage } from '../../Poster';


const Person = ({ id, profilePath, name, birthday }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(id).then(({ cast }) => {
      setCredits(cast);
    });

    return () => {};
  }, []);

  const lastMovie = credits && credits
    .filter(c => new Date(c.releaseDate) < Date.now())
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))[0];

  return (
    <div className="description-container">
      <SmartImage imagePath={profilePath} />
      <div className="description">
        <span className="description-name">{name}</span>
        {birthday && (
          <span className="description-age">{ageFromBirthday(birthday)} anos</span>
        )}
        {lastMovie && (
          <span className="description-last-movie">Último filme: {lastMovie.title}</span>
        )}
      </div>
    </div>
  );
}


export default Person;
