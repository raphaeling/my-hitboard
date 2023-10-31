'use client';

// Deletes chart from storage given an index

export function deleteChartFromStorage(index) {
  const storedCharts = JSON.parse(localStorage.getItem('myhitboardCharts'));

  if (!storedCharts || index >= storedCharts.length) {
    return;
  }
  else { // Delete chart from parsed object then restringify
    storedCharts.splice(index, 1);
    const newCharts = JSON.stringify(storedCharts);
    localStorage.setItem('myhitboardCharts', newCharts);
  }
}
