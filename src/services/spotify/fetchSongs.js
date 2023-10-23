export async function fetchSongs(token) {
  const res = await fetch(
    'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} - ${res.message}`);
  }

  return await res.json();
}
