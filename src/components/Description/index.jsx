import React, { useState, useEffect } from 'react';
import { getMediaType } from '../../lib/api-service';
import {
  Movie,
  Person,
  TV
} from './media-types';


const mediaTypesMap = {
  'movie': Movie,
  'person': Person,
  'tv': TV,
}

const Description = props => {
  const { mediaType, id } = props;
  const [media, setMedia] = useState(props.media);

  useEffect(() => {
    if (!media) {
      getMediaType(mediaType)(id).then(setMedia);
    }

    return () => {};
  }, []);

  const Component = mediaTypesMap[mediaType];
  return media
    ? <Component {...media} />
    : <h1>Carregando...</h1>;
}


export default Description;
