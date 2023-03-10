import React from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApiData } from '../../Helpers/FetchApiData';
import { DataCardsContacts } from '../../Helpers/DataCardContacts';
import { DataChartContacts } from '../../Helpers/DataChartContacts';
import { DataChartPieContacts } from '../../Helpers/DataChartPieContacts';
import { CardHubspot } from '../../components/CardHubspot';
import { CardChart } from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import { CardChartPie } from '../../components/CardChartPie';
import { UserGroupIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/solid";


export const Contacts = () => {

  // Hook Location Page 
  const { pathname } = useLocation();
  const [page] = pathname.split("/").slice(2, 3).filter((el) => el !== "");

  // Call to api in the backend server
  const { backendData, isLoading } = FetchApiData(page);

  // Get data Cards Statitics 
  const { dataLength,
    percentGrowthContacs,
    percentGrowthLeads,
    percentGrowthCustomer,
    growthContacts,
    growthLeads,
    growthCostumers,
    contTotalLeads,
    contTotalCustomer,
    contTotalContactsWithOwner
  } = DataCardsContacts(backendData);

  // Get data Chart
  const { dataChartContact } = DataChartContacts(backendData);

  // Get data ChartPie
  const { dataChartPieContact } = DataChartPieContacts(backendData);

  return (
    <div id='Page' className="bg-secondary-900">
      <div className='grid grid-cols-1 md:grid-cols-6 md:gap-4 place-content-around'>
        <div className='grid grid-cols-1 sm:grid-cols-4 sm:col-span-4 gap-4'>
          <CardChart data={dataChartContact} />
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UserGroupIcon, {
                className: "w-8 h-8 text-white "
              })}
              color="deep-orange"
              title="Total Contacts"
              total={dataLength}
              growth={growthContacts}
              percentGrowth={percentGrowthContacs}
            />
          </div>
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UserIcon, {
                className: "w-8 h-8 text-white"
              })}
              color="blue"
              title="Total Leads"
              total={contTotalLeads}
              growth={growthLeads}
              percentGrowth={percentGrowthLeads}
            />
          </div>
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UserPlusIcon, {
                className: "w-8 h-8 text-white"
              })}
              color="green"
              title="Total Customers"
              total={contTotalCustomer}
              growth={growthCostumers}
              percentGrowth={percentGrowthCustomer}
            />
          </div>
          <div className='col-span-2'>
            <CardStatitics
              icon={React.createElement(UsersIcon, {
                className: "w-8 h-8 text-white"
              })}
              color="orange"
              title="Contacts with owner"
              total={contTotalContactsWithOwner}
              growth={((dataLength - contTotalContactsWithOwner) > 0) ? 0 : 1}
              percentGrowth={`Existing ${dataLength - contTotalContactsWithOwner} ${page} without owner assigned`}
            />
          </div>
        </div>
        <div className='grid grid-cols-1 col-span-2 gap-4 mt-4 md:mt-0'>
          <CardHubspot />
          <CardChartPie data={dataChartPieContact} />
        </div>
      </div>
    </div>
  )
}
