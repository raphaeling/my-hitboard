import { useState, useEffect } from 'react';

export default function HistoryDeleteTooltip({ cancelDelete, confirmDelete }) {
  const [animate, setAnimate] = useState('opacity-0 translate-y-3');

  useEffect(() => {
    setAnimate('opacity-100');
  }, []);
  
  return (
    <span className={`${animate} transition ease-in-out duration-300 bg-slate-300 rounded-md text-sm p-3 absolute right-3 -translate-y-20 z-50 shadow-md`}>
      Delete this chart?
      <br/>
      <span className='flex justify-between mt-2 text-xs'>
        <button
          onClick={cancelDelete}
          className='grow mx-1 p-1 text-white bg-slate-400 hover:bg-slate-500 rounded-md'
        >
          Cancel
        </button>
        <button
          onClick={confirmDelete}
          className='grow mx-1 p-1 text-white bg-red-500 hover:bg-red-600 rounded-md'
        >
          Delete
        </button>
      </span>
    </span>
  );
}
