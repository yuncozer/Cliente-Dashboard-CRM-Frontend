
export const DataChartPieContacts = (backendData) => {
//   const dataChartPieContact = [
//   { name: 'Total Customer', value: 5 },
//   { name: 'Total Leads', value: 3 },
//   { name: 'Others', value: 10 },
//   { name: 'Others 2', value: 7 }
// ];

const dataChartPieContact = [];
let contTotalCustomer = 0;
let contTotalLeads = 0;
let contOthers = 0;
let index = 0;

// Calculate total contacts in CRM
 const dataLength = backendData.length;
  
backendData.map( (el) => {
   // Calculate how many contacts have lead status
    if (el.status === "lead") {
    contTotalLeads += 1
    } else {
        // Calculate how many contacts have customer status
        if (el.status === "customer") {
        contTotalCustomer += 1
        } 
        // Calculate how many contacts have other status
            else {
            contOthers += 1;
        }
    } 
})
dataChartPieContact[index] = {name: "Total Leads", value: contTotalLeads};
dataChartPieContact[index+1] = {name: "Total Customers", value: contTotalCustomer};
dataChartPieContact[index+2] = {name: "Total Others", value: contOthers};
console.log("Others:  ", contOthers);
    return {
        dataChartPieContact, contTotalLeads, contTotalCustomer
    }
}
