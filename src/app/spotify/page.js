import SpotifyData from '@/components/spotify/SpotifyData';
import ViewHistoryButton from '@/components/ViewHistoryButton';
import Link from 'next/link';
import { Suspense, Fragment } from 'react';

function SpotifyDataFallback() {
  return <Fragment/>;
}

export default function SpotifyHome() {
  return (
    <main className='flex max-h-full flex-col items-center justify-center p-24'>
      <Link href='/'>
        <h1 className='text-3xl text-green-500 hover:text-green-700 font-extrabold pb-5'>myhitboard</h1>
      </Link>
      <ViewHistoryButton />
      <Suspense fallback={<SpotifyDataFallback />}>
        <SpotifyData />
      </Suspense>
    </main>
  );
}
