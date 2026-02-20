import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Technology', value: 1299 },
    { name: 'Groceries', value: 450 },
    { name: 'Dining', value: 320 },
    { name: 'Entertainment', value: 180 },
    { name: 'Transport', value: 200 },
];

const COLORS = ['#2EF2E2', '#00BFFF', '#20B2AA', '#7FFFD4', '#40E0D0'];

export const ExpenseChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#0F2F2F',
                        border: '1px solid rgba(46, 242, 226, 0.2)',
                        borderRadius: '12px',
                        color: '#fff'
                    }}
                    itemStyle={{ color: '#fff' }}
                />
                <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => <span style={{ color: '#B0C4C4', fontSize: '12px' }}>{value}</span>}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};
