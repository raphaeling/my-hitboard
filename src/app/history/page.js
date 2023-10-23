'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HistoryHome() {
  // const fakeCharts = [{'datetime':'today','top10':[{'songName':'b', 'artistName': 'eyonce'},{'songName':'c', 'artistName': 'arly'}]},{'datetime':'yesterday','top10':[{'songName':'d', 'artistName': 'idi'},{'songName':'a', 'artistName': 'dele'}]}];
  const charts = (typeof window !== 'undefined') ? JSON.parse(window?.localStorage?.getItem('myhitboardCharts')) : null;
  
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState('Clear charts');

  function handleClick() {
    if (clicks === 0) {
      setButtonText('Are you sure? It\'s permanent!');
      setClicks(clicks+1);
    }
    if (clicks === 1) {
      // Clear all localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('myhitboardCharts', null);
      }
      setButtonText('Clear charts');
      setClicks(0);
    }
  }

  return (
    <main className='flex max-h-full flex-col items-center justify-center p-24'>
      <Link href='/'>
        <h1 className='text-3xl text-slate-500 hover:text-slate-700 font-extrabold pb-5'>
          myhitboard
        </h1>
      </Link>
      <h2 className='text-2xl font-bold'>history</h2>
      <button
        onClick={handleClick}
        className={`text-white text-sm py-1 px-3 rounded-lg focus:outline-none focus:shadow-outline mt-8 ${clicks === 1 ? 'bg-red-500 hover:bg-red-700' : 'bg-slate-500 hover:bg-slate-700' }`}>
        {buttonText}
      </button>
      <div className='flex flex-wrap bg-slate-100 w-full mt-10 p-10 rounded-xl justify-start'>
        {charts ? charts.map((dateChartPair, index) => {
          return (
            <div key={index} className='bg-slate-200 p-3 m-3 rounded-lg w-96'>
              <h1 className='font-bold'>{dateChartPair.datetime}</h1>
              <ol>
                {dateChartPair.top10.map((songObj, index) => {
                  return (
                    <li key={index}>
                      {index + 1}: {songObj.songName} - {songObj.artistName}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        }) : <></>
        }
      </div>
    </main>
  );
}
