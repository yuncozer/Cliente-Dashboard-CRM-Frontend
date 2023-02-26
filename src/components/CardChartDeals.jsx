import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


const contentStyle = {
  color: 'white',
  backgroundColor: '#131517',
  borderRadius: '1.5rem'
}
const wrapperStyle = {
  border: 'none'
}

export const CardChartDeals = ({ data }) => {

  return (
    <div className='sm:col-span-4 items-center justify-center pb-8 h-80 rounded-xl bg-secondary-100 '>
      <span className='flex text-white text-xl font-bold justify-center mt-2 capitalize'>Deals creation history</span>
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
          <Legend align="center" verticalAlign="bottom" height={30} />
          <Area type="monotone" dataKey="Deals_Created" stroke="#b1aeae" activeDot={{ r: 8 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


