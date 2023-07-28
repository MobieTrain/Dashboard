import * as React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PieChart } from '../components/PieChart';
import { BarChart } from '../components/BarChart';
import { LepaStatisticsResult, StatisticsResult } from './types';

type LepaStatisticsProps = {
  data: StatisticsResult;
}

export const LepaStatistics: React.FC<LepaStatisticsProps> = ({ data }) => {

  const lepasPublishedPerClient = data?.publishedPerClient;
  const publishedLepaPerClientForChart = [
    { status: 'Published', value: lepasPublishedPerClient.published },
    { status: 'Draft', value: lepasPublishedPerClient.total - lepasPublishedPerClient.published }
  ];

  const intervals = Array(21).fill(1).map((n, i) => i * 5);
  const computeGlobalLepasByIntervals = () => {
    return data?.lepas.reduce((acc: Map<number, number>, account: LepaStatisticsResult) => {
      const { total } = account;
      const intervalIndex = intervals.findIndex((interval, index) => {
        const nextInterval = intervals[index + 1];
        return total > interval && (nextInterval ? total <= nextInterval : true);
      });
      if (intervalIndex !== -1) {
        const interval = intervals[intervalIndex];
        acc.set(interval, (acc.get(interval) || 0) + 1);
      }
      return acc;
    }, new Map());
  };

  const globalLepasByIntervalsMap = computeGlobalLepasByIntervals();
  const globalLepasForChart = intervals.map((interval, index) => {
    const nextInterval = intervals[index + 1];
    const numberOfLepas = globalLepasByIntervalsMap.get(interval) || 0;
    return {
      interval: nextInterval ? `${interval + 1}-${nextInterval}` : `>${interval}`,
      numberOfLepas
    };
  }).filter(data => data.numberOfLepas > 0);

  if (globalLepasForChart.length === 0) {
    return <h6 className='flex-row justify-center w-1/4 m-auto text-center'>
      No data
    </h6>;
  }

  return <>
    <SectionTitle title='LEPA Statistics' />
    <div className='flex items-center justify-center mb-24'>
      <div className='text-center'>
        <h2>Published learning paths per clients</h2>
        <BarChart data={globalLepasForChart} dataKey='numberOfLepas' xAxisKeys='interval' layout='horizontal' name='Number of accounts' />
      </div>
      <div className='text-center'>
        <h2>Published learning paths per client selected</h2>
        <PieChart data={publishedLepaPerClientForChart} dataKey='value' nameKey='status' />
      </div>
    </div>
  </>;
};