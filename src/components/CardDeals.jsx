import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";


export const CardDeals = ({ nameDeal, amount, nextStep, ownerName, color }) => {


  return (
    <div className='mt-4 transf hover:scale-110'>
      <Card className="bg-secondary-100">
        <CardHeader
          variant="gradient"
          color={color}
          className="grid h-14 place-items-center">
          <Typography variant="h5" className="font-bold text-white text-center capitalize">
            {nameDeal}
          </Typography>
        </CardHeader>
        <CardBody className="grid p-4 text-right">
          <span className='text-gray-400'>Owner:</span>
          <span className='text-white font-bold text-sm'> {ownerName}</span>
          <span className='text-primary text-lg font-bold '>Amount: {amount}$</span>
        </CardBody>
        <CardFooter className="border-t border-blue-gray-50 p-4 text-center" >
          <span className="text-white font-semibold ">Next Step: {nextStep}</span>
        </CardFooter>
      </Card>
    </div>

  )
}

CardDeals.defaultProps = {
  color: "gray",
  ownerName: "no assigned"
};
