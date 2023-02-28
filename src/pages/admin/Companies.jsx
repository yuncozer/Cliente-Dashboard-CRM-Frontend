import React from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApiData } from '../../Helpers/FetchApiData';
import { DataChartCompanies } from '../../Helpers/DataChartCompanies';
import { DataCardCompanies } from '../../Helpers/DataCardCompanies';
import { CardHubspot } from '../../components/CardHubspot';
import { CardChartCompanies } from '../../components/CardChartCompanies';
import { CardStatitics } from '../../components/CardStatitics';
import { CardChartPieCompanies } from '../../components/CardChartPieCompanies';
import { ChartBarCompanies } from '../../components/ChartBarCompanies';
import { BuildingOfficeIcon, UsersIcon } from "@heroicons/react/24/solid";
import { DataChartPieCompanies } from '../../Helpers/DataChartPieCompanies';
import { DataChartBarCompanies } from '../../Helpers/DataChartBarCompanies';



export const Companies = () => {

  // Hook Location Page
  const { pathname } = useLocation();
  const [page] = pathname.split("/").slice(2, 3).filter((el) => el !== "");

  // Call to api in the backend server
  const { backendData, isLoading } = FetchApiData(page);

  // Get data chart
  const { dataChartCompany } = DataChartCompanies(backendData)

  // Get data cards
  const { dataLength, percentGrowthCompanies, growthCompanies, contCompaniesWithOwner } = DataCardCompanies(backendData)

  // Get data chart pie 
  const { dataChartPieCompanies } = DataChartPieCompanies(backendData)

  // Get data chart bar
  const { dataChartBarCompanies } = DataChartBarCompanies(backendData)

  return (
    <div id='Page' className="bg-secondary-900">
      <div className='grid grid-cols-1 md:grid-cols-6 md:gap-4 place-content-around'>
        <div className='grid grid-cols-1 md:col-span-4 sm:grid-cols-4 gap-4'>
          <CardChartCompanies data={dataChartCompany} />
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(BuildingOfficeIcon, {
                className: "w-8 h-8 text-white "
              })}
              color="blue"
              title="Total Companies"
              total={dataLength}
              growth={growthCompanies}
              percentGrowth={percentGrowthCompanies}
            />
          </div>
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UsersIcon, {
                className: "w-8 h-8 text-white"
              })}
              color="indigo"
              title="Companies with owner"
              total={contCompaniesWithOwner}
              growth={((dataLength - contCompaniesWithOwner) > 0) ? 0 : 1}
              percentGrowth={`Existing ${dataLength - contCompaniesWithOwner} ${page} without owner assigned`}
            />
          </div>
          <ChartBarCompanies data={dataChartBarCompanies} />
        </div>
        <div className='grid grid-cols-1 col-span-2 gap-4 mt-4 md:mt-0'>
          <CardHubspot />
          <CardChartPieCompanies data={dataChartPieCompanies} />
        </div>
      </div>
    </div>
  )
}
