import React from 'react';
import { Link } from 'react-router-dom';
import {
  Movie,
  Person,
  TV
} from './media-types';


const mediaTypesMap = {
  'movie': Movie,
  'person': Person,
  'tv': TV
};

const Poster = props => {
  const { mediaType, id } = props;
  const Component = mediaTypesMap[mediaType];

  return (
    <Link to={{ pathname: `/${mediaType}/${id}`, state: { media: props } }}>
      <Component {...props} />
    </Link>
  );
};


export default Poster;
export { default as SmartImage } from './SmartImage';
