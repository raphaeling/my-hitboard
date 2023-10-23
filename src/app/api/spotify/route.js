import querystring from 'querystring';

export async function GET(request) {
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return new Response('Request is missing authcode');
  }

  const authOptions = {
    url: tokenEndpoint,
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      code: code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  };

  try {
    const res = await fetch(tokenEndpoint, authOptions);
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
          ok: true,
        }
      );
    }
    else {
      throw new Error('An error occurred while requesting access token.');
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          'User-Agent': 'myhitboard',
          'Content-Type': 'application/json',
        },
        status: 500,
        ok: false,
      }
    );
  }
}
