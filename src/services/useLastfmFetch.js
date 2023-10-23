import { useState, useEffect } from 'react';


// Calls route to last.fm API endpoint to securely fetch data with the API key
// from the server side. Returns an object with either an error property,
// a list of the ten songs, or an empty list 
export function useLastfmFetch(username) {
  const [lfmData, setLfmData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSongData() {
      try {
        const response = await fetch(`/api/lastfm?username=${username}`);
        if (response.ok) {
          console.log('hii ok', response);
          const data = await response.json();
          setLfmData(data);
          setLoading(false);
        }
        else if (response.status === 500) {
          throw new Error('This');
        }
        else {
          throw new Error('error');
        }
      } catch (error) {
        setLfmData({ error: 'An error with the last.fm API route occurred'});
      }
    }
    fetchSongData();
  }, [username]);

  return { lfmData, loading };
}
