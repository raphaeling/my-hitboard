// Calls API route to access Spotify token without exposing
// client secret and keys.
export async function fetchAccessToken(code) {
  try {
    const response = await fetch(`/api/spotify?code=${code}`);
    if (response.ok) {
      const tokenData = await response.json();
      return tokenData;
    }
    else {
      throw new Error('An error with retrieving Spotify access token occurred.');
    }
  } catch (error) {
    return ({ error: error.message });
  }
}
