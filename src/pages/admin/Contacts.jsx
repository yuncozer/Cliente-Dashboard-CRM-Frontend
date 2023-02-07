import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApi } from '../../Helpers/FetchApi';
import { DataCardsContacts } from '../../Helpers/DataCardsContacts';
import { DataChartContacts } from '../../Helpers/DataChartContacts';
import { DataChartPieContacts } from '../../Helpers/DataChartPieContacts';
import { CardHubspot } from '../../components/CardHubspot';
import {CardChart} from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import {CardChartPie} from '../../components/CardChartPie';
import {
  UserGroupIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon
} from "@heroicons/react/24/solid";


export const Contacts = () => {

  // Hook Location Page
  
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  // Call to api in the backend server
  
  const {backendData, isLoading} = FetchApi( page );
  
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
          contTotalContactsWithOwner,
          percentGrowthContactsOwner
        } = DataCardsContacts (backendData);
  
  // Get data Chart
  
  const { dataChartContact } = DataChartContacts (backendData);

  // Get data ChartPie
  
  const { dataChartPieContact } = DataChartPieContacts (backendData);
  
    return (
      <div id='Page'>       
        <div className='grid grid-cols-1 md:grid-cols-6 md:gap-4 place-content-around'>
          {/* COL 1 */}
            <div className='grid grid-cols-1 md:col-span-4 sm:grid-cols-4 gap-4'>
              <CardChart data={dataChartContact} />                
                {/* CARDS STATITICS */}
                <div className='col-span-2'>
                    <CardStatitics
                      icon={React.createElement(UserGroupIcon, {
                        className: "w-8 h-8 text-white "
                      })}
                      color="deep-orange"
                      title="Total Contacts"
                      total={dataLength}
                      growth= {growthContacts}
                      percentGrowth= {percentGrowthContacs}
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
                      growth= {growthLeads}
                      percentGrowth= {percentGrowthLeads}
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
                      growth= {growthCostumers}
                      percentGrowth= {percentGrowthCustomer}
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
                      growth= {growthCostumers}
                      percentGrowth= {percentGrowthContactsOwner}
                    />     
                </div>                 
            </div>
          {/* COL 2  */}
            <div className='grid grid-cols-1 col-span-2 gap-4 mt-4 md:mt-0'>
            <CardHubspot/> 
            <CardChartPie data={dataChartPieContact} /> 
            </div>
        </div>
      </div>
    )
  }
  