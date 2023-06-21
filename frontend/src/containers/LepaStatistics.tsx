import { BarChart } from '../components/BarChart';
import { SectionTitle } from '../components/SectionTitle';
import * as React from 'react';

export const LepaStatistics: React.FC<any> = ({ data }) => {

    console.log('data lepa', data);
    return <>
        <SectionTitle title='LEPA Statistics' />
        <div className='flex justify-center mb-24'>
            <BarChart data={data} dataKey='total' xAxisKeys='id' layout='horizontal'></BarChart>
            {/* <PieChart data={usersByCountry.getUsersByCountry} dataKey='percentage' nameKey='country'></PieChart> */}
        </div>
        {/* <div className='flex justify-center'>
        <LineChart data={usersByRole.getUsersByRole} dataKey='totalCount' xAxisKeys='role'></LineChart>
      </div>
      <div className='flex justify-center mt-12'>
        <RadarChart data={usersByRole.getUsersByRole}></RadarChart>
      </div> */}
    </>;
};