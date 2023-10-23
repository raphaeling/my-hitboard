'use client';

import { useState } from 'react';

export default function LastfmForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(username);
  }

  return (
    <div className='w-full max-w-xs'>
      <form
        onSubmit={handleSubmit}
        className='rounded bg-slate-100 px-8 pt-6 pb-8 mb-4'>
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
            onChange={(e) => setUsername(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            See Top 10
          </button>
        </div>
      </form>
    </div>
  );
}
