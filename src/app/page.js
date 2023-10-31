import ViewHistoryButton from '@/components/ViewHistoryButton';
import Link from 'next/link';

export default function Home() {
  // Spotify credentials
  const authEndpoint = process.env.SPOTIFY_AUTH_ENDPOINT;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const responseType = 'code';
  const scope = 'user-top-read';
  // TODO: Add state
  const spotifyUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

  return (
    <main className='flex max-h-full flex-col items-center justify-center p-24'>
      <h1 className='text-3xl font-extrabold pb-5'>myhitboard</h1>
      <ViewHistoryButton />
      <div className='flex-col flex justify-between items-center h-36'>
        <div className='my-2 max-w-md text-center'>
          <p>See your music Top 10s and keep them in your browser (on the cloud soon!) as long as you&apos;d like.</p>
        </div>
        <Link href={spotifyUrl}>
          <button className='text-white bg-green-500 hover:bg-green-700 py-2 px-4 my-2 rounded-lg focus:outline-none focus:shadow-outline'>
            Log in via Spotify
          </button>
        </Link>
        <Link href='/lastfm'>
          <button className='text-white bg-red-500 hover:bg-red-700 py-2 px-4 my-2 rounded-lg focus:outline-none focus:shadow-outline'>
            Use last.fm username
          </button>
        </Link>
      </div>
    </main>
  );
}
