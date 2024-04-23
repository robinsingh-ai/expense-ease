import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BarChartDashboard({ budgetList }) {
  return (
    <div className='border rounded-lg p-5'>
      <h2 className='font-bold text-lg'>Activity</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <BarChart
            data={budgetList}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='totalSpend' stackId="a" fill='rgba(72, 187, 120, 0.8)' />
            <Bar dataKey='amount' stackId="a" fill='rgba(72, 187, 120, 0.5)' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartDashboard;
