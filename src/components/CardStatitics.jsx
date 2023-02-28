import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";


export const CardStatitics = ({title, total, growth, percentGrowth, color, icon}) => {


  return (
    <div className='mt-4'>
        <Card className="bg-secondary-100">
          <CardHeader
              variant="gradient"
              color={color}
              className="absolute -mt-4 grid h-16 w-16 place-items-center">
              {icon}
          </CardHeader>
          <CardBody className="p-4 text-right">
              <Typography variant="h6" className="font-bold text-gray-500 capitalize">
              {title}
              </Typography>
              <Typography variant="h3" className="text-white">
              {total}
              </Typography>
          </CardBody>
          <CardFooter className="border-t border-blue-gray-50 p-4" >
              <Typography className={ growth ? `text-light-green-600` : `text-red-400`}>
              {percentGrowth}
              </Typography>
          </CardFooter>      
        </Card>
    </div> 
  )
}
