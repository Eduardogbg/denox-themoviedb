import { camelCase, isObject, mapKeys } from 'lodash';
import config from '../config/api';


const parseCamelCase = (k, v) => (
  !Array.isArray(v) && isObject(v) ? mapKeys(v, (_v, _k) => camelCase(_k)) : v
);

const { key } = config;
const apiHref = "https://api.themoviedb.org/3";


export const multiSearch = async (search, page) => {
  const init = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  };
  const query = {
    query: search,
    api_key: key
  };
  if (page) query.page = page;
  
  const url = new URL(`${apiHref}/search/multi`);
  url.search = new URLSearchParams(query).toString();

  const response = await fetch(url, init);
  
  return JSON.parse(await response.text(), parseCamelCase); 
}

export const configuration = async () => {
  const init = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  };

  const url = new URL(`${apiHref}/configuration`);
  url.search = new URLSearchParams({ api_key: key }).toString();

  const response = await fetch(url, init);

  return await response.json();
}
