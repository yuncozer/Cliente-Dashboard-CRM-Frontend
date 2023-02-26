import {  useState, useEffect } from "react";


export const FetchApiData = (page, deals, owners) => {

    const [backendData, setBackendData] = useState ([]);
    const [backendDataDeals, setBackendDataDeals] = useState ([]);
    const [backendDataOwners, setBackendDataOwners] = useState ([]);
    const [ isLoadingFetchData , setIsLoadingFetchData ] = useState ( true );
    
    useEffect( () => {
      fetch(`/api${page}`).then(  
        response => response.json()
      ).then(
        data => {
            setBackendData( data );
            setIsLoadingFetchData( false );          
        }
      )
      if (deals && owners) {
        fetch(`/api${deals}`).then(  
          response => response.json()
        ).then(
          data => {
              setBackendDataDeals( data );                      
          }
        )
        fetch(`/api${owners}`).then(  
          response => response.json()
        ).then(
          data => {
              setBackendDataOwners( data );   
          }
        )
      }

    }, []);


    

    return {
        backendData,
        backendDataDeals,
        backendDataOwners,
        isLoadingFetchData
    }
}
