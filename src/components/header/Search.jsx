import { useContext, useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { NewsContext } from '../../context';

export default function Search() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { setEndpoint } = useContext(NewsContext);

  // Use the useDebounce hook to debounce the search query
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Handler for input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Effect to set the search endpoint when the debounced search query changes
  useEffect(() => {
    if (debouncedSearchQuery !== '') {
      setEndpoint(`search?q=${debouncedSearchQuery}`);
    } else {
      setEndpoint('top-headlines');
    }
  }, [debouncedSearchQuery, setEndpoint]);

  // Handler for toggle search button
  const handleClick = () => {
    setToggleSearch((showSearch) => !showSearch);
  };

  return (
    <div className='flex items-center space-x-3 lg:space-x-8'>
      {toggleSearch && (
        <input
          type='search'
          className='bg-slate-100 rounded-md'
          autoFocus
          value={searchQuery}
          onChange={handleInputChange}
        />
      )}
      <button onClick={handleClick}>
        <img
          src='./assets/icons/search.svg'
          alt='Search'
        />
      </button>
    </div>
  );
}
