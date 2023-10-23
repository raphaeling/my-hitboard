import LastfmFlow from '@/components/LastfmFlow';

export default function Home() {
  return (
    <main className='flex max-h-full flex-col items-center justify-center p-24'>
      <h1 className='text-3xl font-bold pb-5'>
        myhitboard
      </h1>
      
      <LastfmFlow />
    </main>
  );
}
