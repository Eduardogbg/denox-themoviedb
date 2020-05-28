import {
  Movie,
  Person,
  TV
} from './media-types';


const mediaTypeMap = {
  'movie': Movie,
  'person': Person,
  'tv': TV
};

const Poster = props => mediaTypeMap[props.mediaType](props);


export default Poster;
