'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import HistoryDeleteTooltip from './HistoryDeleteTooltip';

export default function HistoryChartCard({ dateChartPair, onDelete }) {
  const [isTooltipHidden, setIsTooltipHidden] = useState(true);

  function handleConfirmDelete() {
    onDelete();
    setIsTooltipHidden(true);
  }

  return (
    <div className={`relative bg-slate-200 p-5 m-3 rounded-lg w-96 max-w-md grow`}>
      <h1 className='font-bold inline'>{dateChartPair.datetime}</h1>
      {isTooltipHidden ? <></> : (
        <HistoryDeleteTooltip
          cancelDelete={() => setIsTooltipHidden(true)}
          confirmDelete={handleConfirmDelete}
        />
      )}
      <button
        className='absolute right-5 inline-block text-slate-400 hover:text-slate-600'
        onClick={() => setIsTooltipHidden(false)}
      >
        <FaTimes />
      </button>
      <ol>
        {dateChartPair.top10.map((songObj, index) => {
          return (
            <li key={index}>
              {index + 1}: {songObj.songName} - {songObj.artistName}
            </li>
          );
        })}
      </ol>
      {
      /* Future feature!
      <button className={'text-white text-sm py-1 px-3 rounded-lg mt-3 mr-3 bg-slate-500 hover:bg-slate-700'}>
        Compare
      </button>
      */
      }
    </div>
  );
}
