import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { useLocation } from 'react-router-dom';

const contentStyle = {
    color: 'white',
    backgroundColor: '#131517',
    borderRadius: '1.5rem'
}
const wrapperStyle = {
    border: 'none'
}

export const CardChartCompanies = (data) =>{
  const { pathname } = useLocation();
  const [layout1, page] = pathname.split("/").filter((el) => el !== ""); 
    return (
      <div className='sm:col-span-4 items-center justify-center h-80 rounded-xl bg-secondary-100 '>
        <span className='flex text-white text-xl font-bold justify-center mt-2 capitalize'>{page} creation history</span>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data.data}
          margin={{
            top: 25,
            right: 50,
            left: 50,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray= "3 3" />
          <XAxis dataKey="month"/>
          <YAxis />
          <Tooltip  contentStyle={contentStyle} wrapperStyle={wrapperStyle}/>
          <Legend  align="center" verticalAlign="bottom" height={50} layout="horizontal" />
          <Line type="monotone" dataKey="suscriber" stroke="#FC4A4A" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="lead" stroke="#00C49F" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="marketingQLead" stroke="#F5EE05" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="salesQLead" stroke="#51F505" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="opportunity" stroke="#05F5A5" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="customer" stroke="#0088FE" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="evangelist" stroke="#F50505" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="other" stroke="#ca8cbb" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
}


