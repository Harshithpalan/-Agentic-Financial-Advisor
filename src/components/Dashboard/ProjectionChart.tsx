import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Apr', balance: 45250, projected: 45250 },
    { month: 'May', balance: null, projected: 48500 },
    { month: 'Jun', balance: null, projected: 52000 },
    { month: 'Jul', balance: null, projected: 55800 },
    { month: 'Aug', balance: null, projected: 60100 },
    { month: 'Sep', balance: null, projected: 64800 },
];

export const ProjectionChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2EF2E2" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2EF2E2" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(46, 242, 226, 0.05)" vertical={false} />
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#B0C4C4', fontSize: 12 }}
                    dy={10}
                />
                <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#B0C4C4', fontSize: 12 }}
                    tickFormatter={(value) => `$${(value / 1000)}k`}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#0F2F2F',
                        border: '1px solid rgba(46, 242, 226, 0.2)',
                        borderRadius: '12px',
                        color: '#fff'
                    }}
                    itemStyle={{ color: '#fff' }}
                />
                <Area
                    type="monotone"
                    dataKey="projected"
                    stroke="#2EF2E2"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorProjected)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
