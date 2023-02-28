import React from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApiData } from '../../Helpers/FetchApiData';
import { DataCardDeals } from '../../Helpers/DataCardDeals';
import { CardHubspot } from '../../components/CardHubspot';
import { CardStatitics } from '../../components/CardStatitics';
import { ClipboardDocumentIcon, UsersIcon } from "@heroicons/react/24/solid";
import { DataChartDeals } from '../../Helpers/DataChartDeals';
import { CardChartDeals } from '../../components/CardChartDeals';
import { CardChartPieDeals } from '../../components/CardChartPieDeals';
import { DataChartPieDeals } from '../../Helpers/DataChartPieDeals';;
import { ChartBarDeals } from '../../components/ChartBarDeals';
import { DataChartBarDeals } from '../../Helpers/DataChartBarDeals';


export const Deals = () => {

  // Hook Location Page
  const { pathname } = useLocation();
  const [page] = pathname.split("/").slice(2, 3).filter((el) => el !== "");

  // Call to api in the backend server
  const { backendData, isLoading } = FetchApiData("deals");
  const { dataLength, percentGrowthDeals, growthDeals, contDealWithOwner } = DataCardDeals(backendData);

  // Get data chart
  const { dataChartDeal } = DataChartDeals(backendData)

  // Get data chart pie
  const { dataChartPieDeals } = DataChartPieDeals(backendData)

  // Get data chart bar
  const { dataChartBarDeals } = DataChartBarDeals(backendData)

  return (
    <div id='Page' className="bg-secondary-900">
      <div className='grid grid-cols-1 md:grid-cols-6 md:gap-4 place-content-around'>
        <div className='grid grid-cols-1 md:col-span-4 sm:grid-cols-4 gap-4'>
          <CardChartDeals data={dataChartDeal} />
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(ClipboardDocumentIcon, {
                className: "w-8 h-8 text-white "
              })}
              color="teal"
              title="Total Deals"
              total={dataLength}
              growth={growthDeals}
              percentGrowth={percentGrowthDeals + "% + than last month"}
            />
          </div>
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UsersIcon, {
                className: "w-8 h-8 text-white "
              })}
              color="light-blue"
              title="Deals with owner"
              total={contDealWithOwner}
              growth={((dataLength - contDealWithOwner) > 0) ? 0 : 1}
              percentGrowth={`Existing ${dataLength - contDealWithOwner} ${page} without owner assigned`}
            />
          </div>
          <ChartBarDeals data={dataChartBarDeals} />
        </div>
        <div className='grid grid-cols-1 col-span-2 gap-4 mt-4 md:mt-0'>
          <CardHubspot />
          <CardChartPieDeals data={dataChartPieDeals} />
        </div>
      </div>
    </div>
  )
}
