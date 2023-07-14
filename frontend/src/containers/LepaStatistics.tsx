import * as React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PieChart } from '../components/PieChart';

// TODO: Think how to improve it
export const LepaStatistics: React.FC<any> = ({ data }) => {
  const [finalData, setFinalData] = React.useState<any>([]);
  console.log(finalData);

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
    const finalData = Object.keys(dataByIntervalsMap).map(interval => ({
        interval,
        numberOfLepas: dataByIntervalsMap[interval]
    }));
    setFinalData(finalData);
  }, [data]);

  return finalData.length ?
    <>
      <SectionTitle title='LEPA Statistics' />
      <div className='flex justify-center mb-24'>
        <h1>Test</h1>
        <PieChart data={finalData} dataKey={'interval'} nameKey={'numberOfLepas'} />
      </div>
    </>
    : <p>nothing</p>;
};