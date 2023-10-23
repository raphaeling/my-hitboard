'use client';

import { useState, useEffect } from 'react';

export default function LastfmData({ username, apiKey }) {
  const [lfmData, updateLfmData] = useState({ username, apiKey });

  useEffect(() => {
    function fetchSongData() {
      return fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&limit=10&user=${username}&api_key=${apiKey}&format=json`)
        .then(response => {
          // console.log('FETCHING FROM: ' + `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&limit=10&user=${username}&api_key=${apiKey}&format=json`  );
          if (response.ok) {
            return response.json();
          }
          throw new Error('error');
        })
        .then(data => updateLfmData(data))
        .catch(() => {
          updateLfmData({ error: 'An error with retrieving last.fm data occurred'});
        });
    }
    fetchSongData();
  }, [apiKey, username]);

  // Returns a list of song objects if lfmData is not falsy or has error property
  // If otherwise, return empty array (TODO: change this)
  function getSongDetailsFromLfmData() {
    const { error } = lfmData;
    const track = lfmData?.toptracks?.track;

    if (error) {
      return [];
    }
    // Assign array of song objects to track if a request is successful
    if (!track) {
      return ([{
        rank: '',
        songName: '',
        artistName: '',
      }]);
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

    return top10;
  }

  const top10 = getSongDetailsFromLfmData();
  console.log('this is top 10');
  console.log(top10);
  // const top10 = [{rank:1, songName:'silly', artistName:'troye'}];

  return (
    <div>
      <h2>Top 10:</h2>
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
