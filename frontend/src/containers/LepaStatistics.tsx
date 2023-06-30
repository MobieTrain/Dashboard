import * as React from 'react';
import { BarChart } from '../components/BarChart';
import { SectionTitle } from '../components/SectionTitle';

// TODO: Think how to improve it
export const LepaStatistics: React.FC<any> = ({ data }) => {

  return <>
    <SectionTitle title='LEPA Statistics' />
    <div className='flex justify-center mb-24'>
      <BarChart data={data} dataKey='total' xAxisKeys='id' layout='horizontal'></BarChart>
    </div>
  </>;
};