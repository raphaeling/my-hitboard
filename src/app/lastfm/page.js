import LastfmFlow from '@/components/lastfm/LastfmFlow';
import ViewHistoryButton from '@/components/ViewHistoryButton';
import Link from 'next/link';

export default function LastfmHome() {
  return (
    <main className='flex max-h-full flex-col items-center justify-center p-24'>
      <Link href='/'>
        <h1 className='text-3xl text-red-500 hover:text-red-700 font-extrabold pb-5'>myhitboard</h1>
      </Link>
      <ViewHistoryButton />
      <LastfmFlow />
    </main>
  );
}
