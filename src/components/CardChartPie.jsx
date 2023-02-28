import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#818181'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  percent = (percent * 100).toFixed(1)
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {(percent != 0.00) && `${percent}%`}
    </text>
  );
};

export const CardChartPie = ({ data }) => {

  return (
    <div className='flex flex-col items-center h-[30rem] justify-center rounded-xl bg-secondary-100'>

      <span className='text-white text-center px-2 mt-8 mb-8 text-2xl font-bold rounded-2xl'>Contacts by stage life cycle</span>
      <div className='flex flex-col items-start'>
        <span className='px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#0088FE] before:rounded-full
                          before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500 text-left'>
          Leads
        </span>
        <span className='px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#00C49F] before:rounded-full
                          before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
          Customers
        </span>
        <span className='px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#818181] before:rounded-full
                          before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
          Others
        </span>
      </div>
      <ResponsiveContainer width="100%" height="60%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

