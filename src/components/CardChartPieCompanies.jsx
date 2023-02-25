import React from 'react';
import { useLocation } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#00C49F', '#0088FE', '#ca8cbb', '#ffc477', '#eb8787', '##b1aeae' ];

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

export const CardChartPieCompanies = ({data}, contTotalLeads, contTotalCustomer) => {
    

    return (
      <div className='flex flex-col  items-center  h-[34rem] justify-center rounded-xl bg-secondary-100'>
       
       <span className='text-white mt-10 mb-8 p-2 text-2xl font-bold  rounded-2xl capitalize '>Companies Type</span>
          <div className='ml-4'>
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#00C49F] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
              Prospect
            </span>
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#0088FE] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500 text-left'>
              Partner
            </span>
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#ca8cbb] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
              Reseller
            </span> 
          </div>
          <div className='ml-4'>
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#ffc477] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
              Vendor
            </span>
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#eb8787] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
              Others
            </span> 
            <span className='py-2 px-4 relative before:w-4 before:h-4 before:absolute before:bg-[#b1aeae] before:rounded-full
                            before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 text-gray-500'>
              Undefined
            </span>   
          </div>
       
          <ResponsiveContainer  width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={110}
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

