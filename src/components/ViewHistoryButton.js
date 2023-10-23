import Link from 'next/link';

export default function ViewHistoryButton() {
  return (
    <Link href='/history'>
      <button className='text-white text-sm bg-slate-500 hover:bg-slate-700 py-1 px-3 rounded-lg focus:outline-none focus:shadow-outline mb-8'>
        View chart history
      </button>
    </Link>
  );
}
