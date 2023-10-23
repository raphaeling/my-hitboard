'use client';

import { useState } from 'react';

export default function LastfmForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [inputError, setInputError] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username);
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setUsername(inputValue);
    if (inputValue.length <= 15) {
      setInputError(''); // Clear the error message when the input changes
    } else {
      setInputError('Username must be 15 characters or less');
    }
  }

  return (
    <div className='rounded max-w-md bg-slate-100 px-8 pt-6 pb-8 mb-4'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'>
            Last.fm Username
          </label>
          <input
            type='text'
            placeholder='Ex. turntablesturn'
            value={username}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          />
          <span class='flex items-center font-medium text-red-500 text-xs mt-2 ml-1'>
			      {inputError}
		      </span>
        </div>
        <div className='flex items-center justify-between'>
          <button
            disabled={!username || username.length > 15}
            type='submit'
            className='mx-auto bg-red-500 hover:bg-red-700 disabled:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            See Top 10
          </button>
        </div>
      </form>
    </div>
  );
}
