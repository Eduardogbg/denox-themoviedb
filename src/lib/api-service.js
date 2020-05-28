import { camelCase, isObject, mapKeys } from 'lodash-es';
import config from '../config/api';


const parseCamelCase = (k, v) => (
  !Array.isArray(v) && isObject(v) ? mapKeys(v, (_v, _k) => camelCase(_k)) : v
);

const { key } = config;
const apiHref = "https://api.themoviedb.org/3";

const init = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};

const makeRequest = async (uri, query = {}) => {
  const url = new URL(`${apiHref}${uri}`);
  url.search = new URLSearchParams({
    ...query,
    api_key: key
  }).toString();

  const response = await fetch(url, init);
  
  return JSON.parse(await response.text(), parseCamelCase); 
}


export const multiSearch = (search, page) => {
  const query = { query: search }; 
  if (page) query.page = page;
  
  return makeRequest('/search/multi', query);
}

export const getMediaType = mediaType => id => {
  return makeRequest(`/${mediaType}/${id}`);
}

export const configuration = async () => {
  return makeRequest('/configuration');
}

export const getMovieCredits = personId => {
  return makeRequest(`/person/${personId}/movie_credits`);
}
