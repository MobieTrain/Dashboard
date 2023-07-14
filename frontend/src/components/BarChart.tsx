import * as React from 'react';
import { BarChart as BarChartRechart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { LayoutType } from 'recharts/types/util/types';

export type BarChartProps = {
    data: unknown[];
    dataKey: string;
    xAxisKeys?: string;
    yAxisKeys?: string;
    layout: LayoutType;
    name: string;
}

export const BarChart: React.FC<BarChartProps> = (
    { data, dataKey, xAxisKeys, yAxisKeys, layout, name }
) => {
    return (
        <BarChartRechart width={550} height={250} data={data} layout={layout}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKeys} />
            <YAxis dataKey={yAxisKeys} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar name={name} dataKey={dataKey} fill="#6ee7b7" />
        </BarChartRechart>
    );
};


