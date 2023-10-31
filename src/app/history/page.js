'use client';

import HistoryChartContainer from '@/components/history/HistoryChartContainer';
import Link from 'next/link';
import { useState } from 'react';
import { deleteChartFromStorage } from '@/services/deleteChartFromStorage';

export default function HistoryHome() {
  const [clicks, setClicks] = useState(0);
  const [clearChartButtonText, setClearChartButtonText] = useState('Clear charts');
  const initialCharts = (typeof window !== 'undefined') ? JSON.parse(window?.localStorage?.getItem('myhitboardCharts')) : null;
  const [charts, setCharts] = useState(initialCharts);

  function handleDeleteCard(index) {
    deleteChartFromStorage(index);
    // Re-render charts
    const newCharts = (typeof window !== 'undefined') ? JSON.parse(window?.localStorage?.getItem('myhitboardCharts')) : null;
    setCharts(newCharts);
  }

  function handleClearCharts() {
    if (clicks === 0) {
      setClearChartButtonText('Are you sure? It\'s permanent!');
      setClicks(clicks+1);
    }
    if (clicks === 1) {
      // Clear all localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('myhitboardCharts', null);
      }
      // Re-render charts
      const newCharts = (typeof window !== 'undefined') ? JSON.parse(window?.localStorage?.getItem('myhitboardCharts')) : null;
      setCharts(newCharts);
      // Restart button
      setClearChartButtonText('Clear charts');
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
        onClick={handleClearCharts}
        className={`text-white text-sm py-1 px-3 rounded-lg focus:outline-none focus:shadow-outline mt-4 ${clicks === 1 ? 'bg-red-500 hover:bg-red-700' : 'bg-slate-500 hover:bg-slate-700' }`}>
        {clearChartButtonText}
      </button>
      <HistoryChartContainer charts={charts} onCardDelete={handleDeleteCard} />
    </main>
  );
}
