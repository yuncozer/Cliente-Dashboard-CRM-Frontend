import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#006666', '#009999', '#00CCCC', '#00FFFF', '#33FFFF', '#66FFFF', '#99FFFF', '#CCFFFF'];

// const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y} C${x + width / 2},${y + height / 2} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}Z`;
// };

// const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

export const ChartBarCompanies = ({data}) => {
    return (
        <div className='sm:col-span-4 items-center justify-center h-64 rounded-xl bg-secondary-100 '>
            <span className='flex text-white text-xl font-bold justify-center mt-2 capitalize'>Companies Life Cycle</span>
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
                    <Bar dataKey="value" fill="#8884d8" /*shape={<TriangleBar />}*/ label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


