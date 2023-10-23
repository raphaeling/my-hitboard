import LastfmData from '@/components/lastfm-data';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-xl font-bold'>myhitboard</h1>
      {/* Right now only my personal lastfm is being fetched. Of course this wiill be changed soon*/}
      <LastfmData
        username={'turntablesturn'}
        apiKey={process.env.LASTFM_API_KEY} />
    </main>
  );
}
