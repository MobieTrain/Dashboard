import * as React from 'react';
import { Label, LabelList, Pie, PieChart as PieChartRechart } from 'recharts';

export type PieChartProps = {
    data: unknown[];
    dataKey: string;
    nameKey: string;
}

export const PieChart: React.FC<PieChartProps> = (
    { data, dataKey, nameKey }
) => {
    return (
        <PieChartRechart width={550} height={250}>
            <Label value="Percentage of people in each country" position="top" />
            <Pie name="legend" data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={100} innerRadius={40} fill="#0284c7" label>
                <LabelList dataKey={nameKey} position="top" />
            </Pie>
        </PieChartRechart>
    );
};


