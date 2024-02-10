import { useState } from 'react';

export default function Search() {
  const [toggleInput, setToggleInput] = useState(false);
  function handleClick() {
    setToggleInput((showInput) => !showInput);
  }
  return (
    <div className='flex items-center space-x-3 lg:space-x-8'>
      {toggleInput && (
        <input
          type='search'
          className='bg-slate-100'
          autoFocus
        ></input>
      )}
      <button onClick={handleClick}>
        <img src='./assets/icons/search.svg' />
      </button>
    </div>
  );
}
