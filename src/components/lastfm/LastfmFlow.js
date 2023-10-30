'use client';

import { useState } from 'react';
import LastFmForm from './LastfmForm';
import LastfmData from './LastfmData';
import { addChartToStorage } from '@/services/addChartToStorage';

export default function LastfmFlow() {
  const [username, setUsername] = useState('');
  const [chartHidden, setChartHidden] = useState(true);
  const [chartAddable, setChartAddable] = useState(false);

  function handleSeeTop10(u) {
    setUsername(u);
    setChartHidden(false);
    setChartAddable(true);
  }

  // Adds top10 chart to storage
  function handleAddToHistory(chart) {
    setChartAddable(false);
    addChartToStorage(chart);
  }

  return (
    <div className='flex flex-col items-center'>
      <LastFmForm onSubmit={handleSeeTop10}/>
      <div className={`${chartHidden ? 'invisible' : ''}`}>
        <LastfmData
          username={username}
          addToHistoryHandler={handleAddToHistory}
          chartAddable={chartAddable}
        />
      </div>
    </div>
  );
}
