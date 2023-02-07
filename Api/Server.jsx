import axios from 'axios';
import { useState, useEffect } from 'react';

export const  Server =() => { 

const [response, setResponse] = useState(null);
const PRIVATE_APP_ACCESS = "pat-na1-7c30a5aa-76c7-4ca4-99ea-9256ab0dae07";

    const fetchServer = async () => {

        const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
        const headers = {
            Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
            'Content-Type': 'application/json'
        }

        try {
            const resp = await axios.get(contacts, { headers });
            const data = resp.data.results;
            console.log(data);
            setResponse(resp.data.results);

            // res.render('contacts', { title: 'Contacts | HubSpot APIs', data });      
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
		// Trigger the API Call
		fetchServer();
	}, []);
	return (
		<div>
			{
				// If the response is not null, display the quote.
				response && <span>{response.text}</span>
			}
		</div>
	);

}



