import DateObject from "react-date-object";



export const DataCardDeals = (backendData) => {
  
  let contDate = 0;
  let percentGrowthDeals = 0;
  let growthDeals = false;

     // Calculate total companies in CRM
    const dataLength = backendData.length;
    const date = new DateObject();
    const firstDayMonth = date.format("YYYY-MM-01");
    const today = date.format("DD");
    backendData.map((el) => {

      // Calculate number of new companies for the month
      if (firstDayMonth < el.createDate) {
        contDate = contDate + 1;
        growthDeals = true;        
    }
    // Calculates percentage growth in companies compared to the previous month
    percentGrowthDeals = (contDate*100)/dataLength;
    
    });
  return {
        dataLength,
        percentGrowthDeals,
        growthDeals
  }
}
