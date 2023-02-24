import * as React from 'react';
import { RadarChart as RadarChartRechart, PolarAngleAxis, PolarRadiusAxis, PolarGrid, Radar, Legend } from 'recharts';

type RadarChartProps = {
    data: unknown[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
    return (
        <RadarChartRechart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="jobPosition" />
            <PolarRadiusAxis angle={30} domain={[0, 50]} />
            <Radar name="IT" dataKey="percentage" stroke="#8884d8" fill="#6ee7b7" fillOpacity={0.6} />
            <Legend />
        </RadarChartRechart>
    );
};