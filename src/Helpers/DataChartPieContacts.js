
export const DataChartPieContacts = (backendData) => {
//   const dataChartPieContact = [
//   { name: 'Total Customer', value: 5 },
//   { name: 'Total Leads', value: 3 },
//   { name: 'Others', value: 10 },
//   { name: 'Others 2', value: 7 }
// ];

let contTotalCustomer = 0;
let contTotalLeads = 0;
let contOthers = 0;

// Calculate total contacts in CRM
 const dataLength = backendData.length;
  
backendData.map( (el) => {
   // Calculate how many contacts have lead status
    (el.status === "lead") ? contTotalLeads += 1 : 
        // Calculate how many contacts have customer status
        (el.status === "customer") ? contTotalCustomer += 1 :
        // Calculate how many contacts have other status
            contOthers += 1;
    })
const dataChartPieContact = [ {name: "Total Leads", value: contTotalLeads},
                              {name: "Total Customers", value: contTotalCustomer},
                              {name: "Total Others", value: contOthers} 
                            ];
// console.log("Others:  ", contOthers);
    return {
        dataChartPieContact, contTotalLeads, contTotalCustomer
    }
}
