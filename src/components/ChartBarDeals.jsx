import React, { PureComponent } from 'react';
import { BarChart, Bar, Label, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export const ChartBarDeals = ({ data }) => {

    const contentStyle = {
        color: 'white',
        backgroundColor: '#131517',
        borderRadius: '1.5rem'
    }
    const wrapperStyle = {
        border: 'none'
    }


    return (
        <div className='sm:col-span-4 items-center justify-center h-72 rounded-xl bg-secondary-100'>
            <span className='flex text-white text-sm md:text-base font-semibold text-center justify-center mt-2'>Number of deals, weighted and total amount according to the stage before closing</span>
            <ResponsiveContainer width="100%" height="85%" >
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
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis dataKey="name"/>
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
                    <YAxis yAxisId="right" orientation="right" stroke="#ffc658" />
                    <Tooltip contentStyle={contentStyle} wrapperStyle={wrapperStyle} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="totalAmount" stackId="a" fill="#8884d8" />
                    <Bar yAxisId="left" dataKey="totalPredictedAmount" stackId="b" fill="#82ca9d" />
                    <Bar yAxisId="right" dataKey="totalDeals" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

