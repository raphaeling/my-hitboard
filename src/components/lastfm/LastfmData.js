'use client';

import { useLastfmFetch } from '@/services/lastfm/useLastfmFetch';

export default function LastfmData({ username, addToHistoryHandler, chartAddable }) {
  // Uses a custom hook to modularize the fetching process
  const { lfmData, loading } = useLastfmFetch(username);

  // Renders an ordered list of song objects, if no errors in API fetching
  // If there are, return the error message in a div
  function renderSongDetailsFromLfmData() {
    const { error } = lfmData;
    const track = lfmData?.toptracks?.track;

    // If no error message but data exists, it's still loading
    // TODO: Add suspense component here
    if (loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    // TODO: Add error component here
    if (error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }

    // Not enough songs to populate the chart
    if (track.length < 10) {
      return (
        <div>
          <p>Not enough songs from the week :(</p>
        </div>
      );
    }

    // Assign song and artist names to a list of object variables
    // Could possibly also get artist image here using mbid property (musicbrainz)
    const top10 = track.map((lastfmSongObj) => {
      return ({
        songName: lastfmSongObj.name,
        artistName: lastfmSongObj.artist.name,
      });
    });

    // // Adds top10 chart to storage
    // function handleClick() {
    //   addChartToStorage(top10);
    //   setAdded('Added!');
    //   setC
    // }

    console.log(!top10, chartAddable);

    return (
      <div className='min-w-md max-w-md items-center'>
        <h2 className='mx-auto text-center font-bold'>Top 10:</h2>
        <ol>
          {top10.map((songObj, index) => (
            <li key={index}>
              {index + 1}: {songObj.songName} - {songObj.artistName}
            </li>
          ))}
        </ol>
        <div className='flex'>
          <button
            disabled={!top10 || !chartAddable}
            onClick={() => addToHistoryHandler(top10)}
            className='mt-4 disabled:bg-slate-300 text-white bg-slate-500 hover:bg-slate-700 py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'>
            Add chart to history
          </button>
          <span className='text-sm font-medium mx-2 mt-6'>
            {chartAddable ? '' : 'Added!'}
          </span>
        </div>
      </div>
    );
  }

  return renderSongDetailsFromLfmData();
}
