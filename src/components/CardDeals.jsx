import React from 'react';
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";



export const CardDeals = ({nameDeal, amount, nextStep, ownerName, color, icon}) => {


  return (
    <div className='mt-4 '>
        <Card className="bg-secondary-100">
          <CardHeader
              variant="gradient"
              color={color}
              className="grid h-14 place-items-center">
              <Typography variant="h5" className="font-bold text-white capitalize">
              {nameDeal}
              </Typography>
          </CardHeader>
          <CardBody className="grid p-4 text-right">             
            <div>
                <span className='text-gray-400'>Owner:</span>
                <span className='text-white font-bold text-sm'> {ownerName}</span>
            </div>             
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
  };

  CardDeals.propTypes = {
    color: PropTypes.oneOf([
      "white",
      "blue-gray",
      "gray",
      "brown",
      "deep-orange",
      "orange",
      "amber",
      "yellow",
      "lime",
      "light-green",
      "green",
      "teal",
      "cyan",
      "light-blue",
      "blue",
      "indigo",
      "deep-purple",
      "purple",
      "pink",
      "red",
    ]),
    
  };