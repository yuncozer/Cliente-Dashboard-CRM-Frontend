import React from 'react'
import { useLocation } from 'react-router-dom';
import { FetchApi } from '../../Helpers/FetchApi';
import { RiDownload2Fill } from "react-icons/ri";
import { CardHubspot } from '../../components/CardHubspot';
import {CardChart} from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import {CardChartPie} from '../../components/CardChartPie';
import { TableList } from '../../components/TableList';

export const AccountManagers = () => {
  
  // Hook Location Page
  
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  // Call to api in the backend server
  
  const {backendData, isLoading} = FetchApi( page );
  console.log("ACAAA :", backendData);
    return (
      <div id='Page'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
         
        <TableList/>
  
        </div>
      </div>
    )
  }
  