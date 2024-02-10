import { useState } from 'react';

export default function Search() {
  const [toggleSearch, setToggleSearch] = useState(false);
  function handleClick() {
    setToggleSearch((showSearch) => !showSearch);
  }
  return (
    <div className='flex items-center space-x-3 lg:space-x-8'>
      {toggleSearch && (
        <input
          type='search'
          className='bg-slate-100 rounded-md'
          autoFocus
        ></input>
      )}
      <button onClick={handleClick}>
        <img
          src='./assets/icons/search.svg'
          className=''
        />
      </button>
    </div>
  );
}
