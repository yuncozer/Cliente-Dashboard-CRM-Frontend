import React from 'react'
import { useLocation } from 'react-router-dom';
import { DataCardDealsAccountsManager } from '../../Helpers/DataCardDealsAccountsManager';
import { FetchApiData } from '../../Helpers/FetchApiData';
import { CardHubspot } from '../../components/CardHubspot';
import { CardDeals } from '../../components/CardDeals';
import { TableList } from '../../components/TableList';
import { ThemeProvider, createTheme } from '@mui/material/styles';


// Create custom theme
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      background: {
        default: '#131517',
        paper: '#151519',
      },
    }),
    text: {
      ...(mode === 'dark' && {
        primary: '#ffff',
        secondary: '#6276e5',
      }),
    },
  },
});


export const AccountManagers = () => {

  // Hook Location Page
  const { pathname } = useLocation();
  const [page] = pathname.split("/").slice(2, 3).filter((el) => el !== "");

  // Call to api in the backend server
  const { backendData, backendDataDeals, backendDataOwners, isLoadingFetchData } = FetchApiData(page, 'deals', 'owners');

  // Get data card deals
  const { dataDeals } = DataCardDealsAccountsManager(backendDataDeals, backendDataOwners);

  // call custom theme dark
  const darkModeTheme = createTheme(getDesignTokens('dark'));

  return (
    <div id='Page' className="bg-secondary-900">

      <div className='grid grid-cols-1 sm:grid-cols-4 gap-8'>
        <span className='sm:col-span-4 ml-4 font-bold text-4xl text-white '>Unclosed Deals </span>
        {(isLoadingFetchData) ?
          dataDeals.map(el => (
            <CardDeals
              key={el.id}
              nameDeal="loading"
            />
          )) :
          dataDeals.map(el => (
            <CardDeals
              key={el.id}
              nameDeal={el.nameDeal}
              amount={el.amount}
              nextStep={el.nextStep}
              ownerName={el.ownerName}
              color={el.color}
            />
          ))
        }
        <div className='sm:col-span-4 max-h-min'>
          <ThemeProvider theme={darkModeTheme}>
            <TableList
              data={backendData}
              isLoading={isLoadingFetchData}
            />
          </ThemeProvider>
        </div>
        <div className='sm:col-span-4 max-h-min'>
          <CardHubspot />
        </div>
      </div>
    </div>
  )
}
