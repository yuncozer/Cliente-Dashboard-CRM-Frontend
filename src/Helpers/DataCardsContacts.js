import DateObject from "react-date-object";

export const DataCardsContacts = (backendData) => {
  
    // Calculate total contacts in CRM
  const dataLength = backendData.length;
  

  let contDate = 0;
  let percentGrowthContacs = 0;
  let percentGrowthLeads = 0;
  let percentGrowthCustomer = 0;
  let growthContacts = false;
  let growthLeads = false;
  let growthCostumers = false;
  let contTotalLeads = 0;
  let contMonthLeads = 0;
  let contTotalCustomer = 0;
  let contMonthCustomer = 0;
  let contTotalContactsWithOwner = 0;
  let contTotalContactsWithOwnerMonth = 0;
  let percentGrowthContactsOwner= 0;


  const date = new DateObject();
  const firstDayMonth = date.format("YYYY-MM-01");
  const today = date.format("DD");
  backendData.map((el) => {
        // Calculate number of new contacts for the month
        if (firstDayMonth < el.createDate) {
            contDate = contDate + 1;
            growthContacts = true;        
        }
        // Calculate how many contacts have lead status
        if (el.status === "lead") {
            contTotalLeads += 1
        }
        // Calculate how many contacts have customer status
        if (el.status === "customer") {
          contTotalCustomer += 1
        }
        // Calculates percentage growth in contacts compared to the previous month
        percentGrowthContacs = (contDate*100)/dataLength;
        
        // Calculates percentage growth in leads compared to the previous month
        if (parseInt(el.timeLead / 86400000) < parseInt(today)) {
          contMonthLeads += 1;
          growthLeads = true;
        }
        percentGrowthLeads = (contMonthLeads*100)/contTotalLeads;

        // Calculates percentage growth in customers compared to the previous month
        if (parseInt(el.timeCustomer / 86400000) < parseInt(today)) {
          contMonthCustomer += 1;
          growthCostumers = true;
        }
        percentGrowthCustomer = (contMonthCustomer*100)/contTotalCustomer;

        // Calculate how many contacts are not unworked
        if (el.dateOwnerAssigned) {
            contTotalContactsWithOwner += 1;
        }

        // Calculates how many contacts have a owner and percentage growth in customers compared to the previous month
        if (el.dateOwnerAssigned > firstDayMonth) {
            growthCostumers = true;
            contTotalContactsWithOwnerMonth += 1;
          }
        percentGrowthContactsOwner = (contTotalContactsWithOwnerMonth*100)/contTotalContactsWithOwner;        

      });
    // console.log(percentGrowthLeads.toFixed(0));
    // console.log("total: ", contTotalContactsWithOwner);
  
  // 

    return {
        dataLength,
        contDate,
        percentGrowthContacs,
        percentGrowthLeads,
        percentGrowthCustomer,
        growthContacts,
        growthLeads,
        growthCostumers,
        contTotalLeads,
        contMonthLeads,
        contTotalCustomer,
        contMonthCustomer,
        contTotalContactsWithOwner,
        percentGrowthContactsOwner
    }
}
