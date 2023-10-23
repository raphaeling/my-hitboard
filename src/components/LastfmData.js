'use client';

import { useLastfmFetch } from '@/services/useLastfmFetch';
// import { useState, useEffect } from 'react';

export default function LastfmData({ username }) {
  // const [lfmData, setLfmData] = useState({});
  // // Calls the Lastfm API route to securely fetch data with the API key
  // // from the server side

  // // TODO: Fix error popping up before data fully loads
  // useEffect(() => {
  //   async function fetchSongData() {
  //     try {
  //       const response = await fetch(`/api/lastfm?username=${username}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setLfmData(data);
  //       }
  //       else {
  //         throw new Error('error');
  //       }
  //     } catch (error) {
  //       setLfmData({ error: 'An error with the last.fm API route occurred'});
  //     }
  //   }
  //   fetchSongData();
  // }, [username]);

  const { lfmData, loading } = useLastfmFetch(username);
  // console.log(lfmData);

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
      <div>
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
