'use client';

// Takes a top10 object {[{songName, artistName} * 10]}
// and adds it to stringified localStorage property myhitboardCharts
// When parsed, myhitboardCharts's object shape is:
//    [{datetime: <string>, top10: [{songName: <string>, artistName: <string>}]}]

export function addChartToStorage(top10) {
  const storedCharts = JSON.parse(localStorage.getItem('myhitboardCharts'));
  const d = new Date();
  const minutesWithLeadingZero = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  const datetime = `${d.toLocaleString('default', { month: 'long' })} ${d.getDate()}, ${d.getFullYear()} ${d.getHours()}:${minutesWithLeadingZero}`;

  if (!storedCharts) {
    const newCharts = JSON.stringify([{'datetime': datetime, 'top10': top10}]);
    localStorage.setItem('myhitboardCharts', newCharts);
  }
  else { // Parse stored JSON then add to it then restringify
    const newCharts = JSON.stringify([{'datetime': datetime, 'top10': top10}].concat(storedCharts));
    localStorage.setItem('myhitboardCharts', newCharts);
  }
}
