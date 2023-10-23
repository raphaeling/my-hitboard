// This API route is to protect the API keys from being
// exposed to the browser by guaranteeing server-side calling

export async function GET(request) {
  const apiKey = process.env.LASTFM_API_KEY;
  
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get('username');

  if (!username) {
    return new Response('Request is missing username', { status: 400 });
  }

  const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=7day&limit=10&user=${username}&api_key=${apiKey}&format=json`;

  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      return new Response(
        JSON.stringify(data),
        {
          headers: {
            'User-Agent': 'myhitboard',
            'Content-Type': 'application/json',
          },
          status: 200,
        }
      );
    }
    else if (res === 6) {
      console.log('USER!');
      throw new Error('User not found');
    }
    else {
      throw new Error('Error');
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An error with retrieving last.fm data occurred' }),
      {
        headers: {
          'User-Agent': 'myhitboard',
          'Content-Type': 'application/json',
        },
        status: 500,
      }
    );
  }
}
