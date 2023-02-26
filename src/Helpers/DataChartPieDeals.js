
export const DataChartPieDeals = (backendData) => {

let contNewBusiness = 0;
let contExistingBusiness = 0;
let contUndefined = 0;

// Calculate total contacts in CRM
 const dataLength = backendData.length;
  
backendData.map( (el) => {
   // Calculate how many contacts have lead status
    (el.dealType === "existingbusiness") ? contExistingBusiness += 1 : 
        // Calculate how many contacts have customer status
        (el.dealType === "newbusiness") ? contNewBusiness += 1 :
        // Calculate how many contacts have other status
            contUndefined += 1;
    })
const dataChartPieDeals = [ {name: "New Business", value: contNewBusiness},
                              {name: "Existing Business ", value: contExistingBusiness},
                              {name: "Undefined", value: contUndefined} 
                            ];
// console.log("Others:  ", contUndefined);
    return {
        dataChartPieDeals, contExistingBusiness, contNewBusiness
    }
}
