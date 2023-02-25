import DateObject from "react-date-object";



export const DataCardCompanies = (backendData) => {
  
  let contDate = 0;
  let percentGrowthCompanies = 0;
  let growthCompanies = false;
  let contCompaniesWithOwner = 0;

     // Calculate total companies in CRM
    const dataLength = backendData.length;
    const date = new DateObject();
    const firstDayMonth = date.format("YYYY-MM-01");
    const today = date.format("DD");
    backendData.map((el) => {

      // Calculate number of new companies for the month
      if (firstDayMonth < el.createDate) {
        contDate = contDate + 1;
        growthCompanies = true;        
    }
    // Calculates percentage growth in companies compared to the previous month
    percentGrowthCompanies = (contDate*100)/dataLength;
    
    // Calculate how many companies have assigned owner
    
      if(el.ownerId) contCompaniesWithOwner += 1;
    
    
    });
  return {
        dataLength,
        percentGrowthCompanies,
        growthCompanies,
        contCompaniesWithOwner
  }
}
