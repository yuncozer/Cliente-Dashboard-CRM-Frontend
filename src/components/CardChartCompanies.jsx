import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const contentStyle = {
  color: 'white',
  backgroundColor: '#131517',
  borderRadius: '1.5rem'
}
const wrapperStyle = {
  border: 'none'
}

export const CardChartCompanies = ({ data }) => {

  return (
    <div className='sm:col-span-4 items-center justify-center h-80 rounded-xl bg-secondary-100 '>
      <span className='flex text-white text-xl font-bold justify-center mt-2 capitalize'>Companies creation history</span>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 25,
            right: 50,
            left: 50,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={contentStyle} wrapperStyle={wrapperStyle} />
          <Legend align="center" verticalAlign="bottom" height={60} layout="horizontal" />
          <Area type="monotone" dataKey="companies" stroke="#b1aeae" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


