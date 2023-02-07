import {  useState, useEffect } from "react";


export const FetchApi = (page) => {
    const obj = "email-30595669662-contact";
    const idObj = "30595669662";
    const [backendData, setBackendData] = useState ([]);
    const [ isLoading, setIsLoading ] = useState ( true );
    
    useEffect( () => {
      // fetch(`/api${page}/` + `${obj}/`).then(
      fetch(`/api${page}`).then(  
        response => response.json()
      ).then(
        data => {
          setBackendData( data );
          setIsLoading( false );   
        }
      )

    }, []);

    return {
        backendData,
        isLoading
    }
}
