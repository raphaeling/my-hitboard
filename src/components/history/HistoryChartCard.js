export default function HistoryChartCard({ dateChartPair }) {
  return (
    <div className='bg-slate-200 p-3 m-3 rounded-lg w-96'>
      <h1 className='font-bold'>{dateChartPair.datetime}</h1>
      <ol>
        {dateChartPair.top10.map((songObj, index) => {
          return (
            <li key={index}>
              {index + 1}: {songObj.songName} - {songObj.artistName}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
