import React from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApiData } from '../../Helpers/FetchApiData';
import { DataCardCompanies } from '../../Helpers/DataCardCompanies';
import { RiDownload2Fill } from "react-icons/ri";
import { CardHubspot } from '../../components/CardHubspot';
import {CardChart} from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import {CardChartPie} from '../../components/CardChartPie';
import {
  BuildingOfficeIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon
} from "@heroicons/react/24/solid";

export const Companies = () => {
  
   // Hook Location Page
  
   const { pathname } = useLocation();
   const [layout, page] = pathname.split("/").filter((el) => el !== "");

  // Call to api in the backend server
  
  const {backendData, isLoading} = FetchApiData( page );

  const { dataLength,
    percentGrowthCompanies,
    growthCompanies
 
  } = DataCardCompanies (backendData);
  
  return (
    <div id='Page'>       
      <div className='grid grid-cols-1 md:grid-cols-6 md:gap-4 place-content-around'>
        {/* COL 1 */}
          <div className='grid grid-cols-1 md:col-span-4 sm:grid-cols-4 gap-4'>
            <CardChart/>                
              {/* CARDS STATITICS */}
              <div className='col-span-2'>
                  <CardStatitics
                    icon={React.createElement(BuildingOfficeIcon, {
                      className: "w-8 h-8 text-white "
                    })}
                    color="deep-orange"
                    title="Total Companies"
                    total={dataLength}
                    growth= {growthCompanies}
                    percentGrowth= {percentGrowthCompanies}
                  />
              </div>
       
          </div>
        {/* COL 2  */}
          <div className='grid grid-cols-1 col-span-2 gap-4 mt-4 md:mt-0'>
          <CardHubspot/> 
         
          </div>
      </div>
    </div>
  )
  }
  