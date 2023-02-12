import {  useState, useEffect } from "react";


export const FetchApiData = (page, deals, owners) => {

    const [backendData, setBackendData] = useState ([]);
    const [backendDataDeals, setBackendDataDeals] = useState ([]);
    const [backendDataOwners, setBackendDataOwners] = useState ([]);
    const [ isLoading, setIsLoading ] = useState ( true );
    
    useEffect( () => {
      fetch(`/api${page}`).then(  
        response => response.json()
      ).then(
        data => {
            setBackendData( data );
            setIsLoading( false );          
        }
      )
      if (deals && owners) {
        fetch(`/api${deals}`).then(  
          response => response.json()
        ).then(
          data => {
              setBackendDataDeals( data );
              //setIsLoading( false );          
          }
        )
        fetch(`/api${owners}`).then(  
          response => response.json()
        ).then(
          data => {
              setBackendDataOwners( data );
              //setIsLoading( false );          
          }
        )
      }

    }, []);


    

    return {
        backendData,
        backendDataDeals,
        backendDataOwners,
        isLoading
    }
}
