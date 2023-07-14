import * as React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PieChart } from '../components/PieChart';
import { BarChart } from '../components/BarChart';

export const LepaStatistics: React.FC<any> = ({ data }) => {
  const [finalData, setFinalData] = React.useState<any>([]);
  const [published, setPublished] = React.useState<any>([]);

  React.useEffect(() => {
    if (!data) {
      return;
    }
    const intervals = Array(21).fill(1).map((n, i) => i * 5);
    const dataByIntervalsMap = data?.lepas.reduce((acc: any, account: any) => {
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


    // published
    const x = [
      { status: 'Published', value: data?.publishedPerClient?.published },
      { status: 'Draft', value: data?.publishedPerClient?.total - data?.publishedPerClient?.published }
    ];

    setPublished(x);
  }, [data]);

  return finalData.length ?
    <>
      <SectionTitle title='LEPA Statistics' />
      <div className='flex items-center justify-center mb-24'>
        <div>
          <h2>Learning paths published by all accounts</h2>
          <BarChart data={finalData} dataKey='numberOfLepas' xAxisKeys='interval' layout='horizontal' name='Number of accounts' />
        </div>
        <div>
          <h2>Learning paths published by client</h2>
          <PieChart data={published} dataKey='value' nameKey='status' />
        </div>
      </div>
    </> : null;
};