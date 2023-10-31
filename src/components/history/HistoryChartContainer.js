'use client';

import HistoryChartCard from './HistoryChartCard';

export default function HistoryChartContainer({ charts, onCardDelete }) {
  return (
    <div className='flex container flex-wrap justify-center my-3 p-5 rounded-xl'>
      {(charts && charts?.length > 0) ? (
        charts.map((dateChartPair, index) => {
          return (
            <HistoryChartCard
              key={index}
              dateChartPair={dateChartPair}
              onDelete={() => onCardDelete(index)} />
          );
        })
      ) : (
        <div className='text-slate-300'>
          {'No charts saved :('}
        </div>
      )}
    </div>
  );
}
