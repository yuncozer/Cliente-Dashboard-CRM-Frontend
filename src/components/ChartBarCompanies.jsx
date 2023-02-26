import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const colors = ['#006666', '#009999', '#00CCCC', '#00FFFF', '#33FFFF', '#66FFFF', '#99FFFF', '#CCFFFF'];

const contentStyle = {
    color: 'white',
    backgroundColor: '#131517',
    borderRadius: '1.5rem'
  }
  const wrapperStyle = {
    border: 'none'
  }
  


export const ChartBarCompanies = ({data}) => {
    return (
        <div className='sm:col-span-4 items-center justify-center h-64 rounded-xl bg-secondary-100 '>
            <span className='flex text-white text-xl font-bold justify-center mt-2'>Number of Companies according to their Life Cycle
</span>
            <ResponsiveContainer width="100%" height="85%">               
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={contentStyle} wrapperStyle={wrapperStyle} />
                    <Bar dataKey="total" fill="#8884d8" /*shape={<TriangleBar />}*/ label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


