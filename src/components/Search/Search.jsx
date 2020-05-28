import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash-es';
import { parse } from 'qs';
import { multiSearch } from '../../lib/api-service';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


const gatherSearch = (defaultState, setState) => async (search, page) => {
  if (search) {
    const response = await multiSearch(search, page);
    
    if (!response || response['status_message']) {
      throw new Error('skr skrrrrr');
    }
  
    setState(response);
  } else if (search === '') {
    setState(defaultState)
  }
}

const defaultResults = {
  results: [],
  page: 0,
  totalPages: 0,
  totalResults: 0
};

const Search = ({ location, history }) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const [search, setSearch] = useState(query.search || '');
  const [results, setResults] = useState(defaultResults);  
  
  const searchMedia = gatherSearch(defaultResults, setResults);
  const searchWhenIdle = debounce(searchMedia, 300);

  useEffect(() => { 
    searchMedia(search);
    return () => {};
  }, [location.search]);

  const onTyping = search => {
    setSearch(search);
    history.replace({ pathname: location.pathname, search: `?search=${search}`});
    searchWhenIdle(search);
  }

  return (<>
    <SearchBar search={search} onTyping={onTyping} />
    <SearchResults {...results}/>
  </>);
}


export default Search;
