import * as React from 'react';
import { LineChart as LineChartRechart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export type LineChartProps = {
  data: unknown[];
  dataKey: string;
  xAxisKeys: string;
}

export const LineChart: React.FC<LineChartProps> = (
  { data, dataKey, xAxisKeys }
) => {
  return (
    <LineChartRechart width={1200} height={300} data={data}>
      <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey={xAxisKeys} />
      <YAxis />
    </LineChartRechart>
  );
};


