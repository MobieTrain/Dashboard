import * as React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { BarChart } from '../components/BarChart';

export const LepaStatistics: React.FC<any> = ({ data }) => {
  const [finalData, setFinalData] = React.useState<any>([]);

  React.useEffect(() => {
    const intervals = Array(21).fill(1).map((n, i) => i * 5);
    
    const dataByIntervalsMap = data.reduce((acc: any, account: any) => {
      const { total } = account;
      for (const value of Array.from(Array(intervals.length).keys())) {
        if (total > intervals[value] && (intervals[value + 1] ? total <= intervals[value + 1] : true)) {
          if (acc[intervals[value]]) {
            acc[intervals[value]] += 1;
          } else {
            acc[intervals[value]] = 1;
          }
        }
      }
      return acc;
    }, {});
    
    const finalData = Object.keys(dataByIntervalsMap).map((interval) => {
      const intervalIndex = intervals.findIndex(x => x === parseInt(interval, 10));
      if (intervalIndex === -1) return null;
      const nextIntervalIndex = intervalIndex + 1;
      return {
        interval: intervals[nextIntervalIndex] ? `${parseInt(interval, 10) + 1}-${intervals[nextIntervalIndex]}` : `>${interval}`,
        numberOfLepas: dataByIntervalsMap[interval]
      };
    });
    
    setFinalData(finalData);
  }, [data]);

  return finalData.length ?
    <>
      <SectionTitle title='LEPA Statistics' />
      <div className='flex flex-col items-center justify-center mb-24'>
        <h2>Published learning paths by accounts</h2>
        <BarChart data={finalData} dataKey='numberOfLepas' xAxisKeys='interval' layout='horizontal' name='Number of accounts' />
      </div>
    </> : null;
};