'use client';

import { useState } from 'react';
import LastFmForm from './LastfmForm';
import LastfmData from './LastfmData';

export default function LastfmFlow() {
  const [username, setUsername] = useState('');
  const [chartHidden, setChartHidden] = useState(true);

  function handleSubmit(u) {
    setUsername(u);
    setChartHidden(false);
  }

  return (
    <div className='flex flex-col items-center'>
      <LastFmForm onSubmit={handleSubmit}/>
      <div className={`${chartHidden ? 'invisible' : ''}`}>
        <h2>Top 10:</h2>
        <LastfmData username={username} />
      </div>
    </div>
  );
}
