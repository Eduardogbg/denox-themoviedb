import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { parse } from 'qs';
import { multiSearch } from '../../lib/api-service';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


const gatherSearch = setState => async (search, page) => {
  if (search) {
    const response = await multiSearch(search, page);
    
    if (!response || response['status_message']) {
      throw new Error('skr skrrrrr');
    }
  
    setState(response);
  }
}

const Search = ({ location }) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const [search, setSearch] = useState(query.search || '');
  const [results, setResults] = useState({});  
  
  const searchMedia = gatherSearch(setResults);
  const searchWhenIdle = debounce(searchMedia, 300);

  useEffect(() => searchMedia(search), [location.search]);

  const onTyping = search => {
    setSearch(search);
    searchWhenIdle(search);
  }

  return (<>
    <SearchBar search={search} onTyping={onTyping} />
    <SearchResults {...results}/>
  </>);
}


export default Search;
