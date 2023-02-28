import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';


const contentStyle = {
  color: 'white',
  backgroundColor: '#131517',
  borderRadius: '1.5rem'
}
const wrapperStyle = {
  border: 'none'
}

export const CardChart = ({ data }) => {

  return (
    <div className='col-span-2 sm:col-span-4 pb-10 h-80 rounded-xl bg-secondary-100'>
      <span className='flex flex-col items-center text-white text-xl font-bold justify-center mt-2 capitalize'>Contacts creation history
        <span className='text-xs text-gray-500'>The last four months</span>
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Legend align="center" verticalAlign="bottom" layout="horizontal" />
          <Line type="monotone" dataKey="suscriber" stroke="#f3a8c2" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="lead" stroke="#dcffff" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="marketingQLead" stroke="#77dd77" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="salesQLead" stroke="#eef6b0" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="opportunity" stroke="#5086c1" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="customer" stroke="#0088FE" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="evangelist" stroke="#e2504c" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="other" stroke="#818181" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


