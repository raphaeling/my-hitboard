'use client';

import HistoryChartCard from '@/components/history/HistoryChartCard';
import Link from 'next/link';
import { useState } from 'react';

export default function HistoryHome() {
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
      <div className='flex flex-wrap bg-slate-100 w-full my-10 p-10 rounded-xl justify-center'>
        {charts ? (
          charts.map((dateChartPair, index) => {
            return (
              <HistoryChartCard key={index} dateChartPair={dateChartPair} />
            );
          })
        ) : (
          <div className='text-slate-300'>
            {'No charts saved :('}
          </div>
        )}
      </div>
    </main>
  );
}
