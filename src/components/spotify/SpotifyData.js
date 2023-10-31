'use client';

import { useSearchParams } from 'next/navigation';
import { fetchAccessToken } from '@/services/spotify/fetchAccessToken';
import { useEffect, useState, useRef, Fragment } from 'react';
import { fetchSongs } from '@/services/spotify/fetchSongs';
import { addChartToStorage } from '@/services/addChartToStorage';

export default function SpotifyData() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [ songList, setSongList ] = useState([]);
  const [ disabled, setDisabled ] = useState(true);
  const [ added, setAdded ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const dataFetchedRef = useRef(false);
  

  // Fetch token and songs only once when component mounts
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    async function getSongsFromToken() {
      try {
        const response = await fetchAccessToken(code);

        const accessToken = response.access_token;
        if (accessToken) {
          const track = await fetchSongs(accessToken);
          const songs = track.items;
          setSongList(songs);
          setDisabled(false); // Only allow button to be clickable once songList is populated
          setLoading(false);
        }

      } catch (error) {
        console.error({error: 'An error in retrieving the access token occurred.'});
      }
    };
    
    getSongsFromToken();
  }, [code]);

  // Grab only the song and artist from the songs
  const top10 = songList.map(song => {
    return {
      songName: song.name,
      artistName: song.artists[0].name,
    };
  });

  // Adds top 10 chart to storage
  function handleClick() {
    addChartToStorage(top10);
    setAdded('Added!');
  }

  return (
    <div className='min-w-md max-w-md items-center'>
      {loading ? 'Loading...' : (
        <Fragment>
          <h2 className='mx-auto text-center font-bold'>Top 10:</h2>
          <ol>
            {top10.map((songObj, index) => (
              <li key={index}>
                {index + 1}: {songObj.songName} - {songObj.artistName}
              </li>
            ))}
          </ol>
          <button
            disabled={disabled || added}
            onClick={handleClick}
            className='mt-8 text-white disabled:bg-slate-300 bg-slate-500 hover:bg-slate-700 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
            Add chart to history
          </button>
          <span className='text-sm font-medium mx-2 mt-6'>
            {added}
          </span>
        </Fragment>
      )}
    </div>
  );
}
