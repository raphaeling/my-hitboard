'use client';

import { useLastfmFetch } from '@/services/useLastfmFetch';
// import { useState, useEffect } from 'react';

export default function LastfmData({ username }) {
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

    // Assign song and artist names to a list of object variables
    // Could possibly also get artist image here using mbid property (musicbrainz)
    const top10 = track.map((lastfmSongObj, index) => {
      return ({
        rank: index + 1,
        songName: lastfmSongObj.name,
        artistName: lastfmSongObj.artist.name,
      });
    });

    // TODO: Add 
    return (
      <div className='min-w-md max-w-md items-center'>
        <h2 className='mx-auto text-center font-bold'>Top 10:</h2>
        <ol>
          {top10.map((songObj, index) => (
            <li key={index}>
              {songObj.rank}: {songObj.songName} - {songObj.artistName}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return renderSongDetailsFromLfmData();
}
