

export const DataChartContacts = (backendData) => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Calculate total contacts in CRM
    const dataLength = backendData.length;
    
    // const data = 
    // [
    //   {month: 'Oct', customer: 0, lead: 2},
    //   {month: 'Nov', customer: 1, lead: 0},
    //   {month: 'Dec', customer: 3, lead: 1},
    //   {month: 'Jan', customer: 1, lead: 5},
    // ];
    
    // Calculate three months old
    var resta = 7889400000; // Three Month in miliseconds
    var dateEnd    = new Date(); // Today
    var dateStart = new Date();
    dateStart.setTime(dateEnd.getTime()  - resta) // Three months ago
    
    let dataChartContact =[]      // Data to be returned to the component 
    let intervalStart;            // Interval Start initialization
    let intervalEnd = new Date(); // Final interval initialization
    let contCustomer = 0;         // customer counter
    let contEvangelist = 0;       // evangelist counter
    let contLead = 0;             // counter counter
    let contMarketingQLead = 0;   // marketingqualifiedlead counter
    let contOpportunity = 0;      // opportunity counter
    let contOther = 0;            // other counter
    let contSalesQLead = 0;       // salesqualifiedlead counter
    let contSubscriber = 0        // subscriber counter
    
    //  Take the month and year of the start date by converting the start date to a string and separating the data
    let [day, month, dayNum, yearNum, time] = dateStart.toString().split(" ").filter((el) => el !== "");
    
    // Calculate the total number of days of the specific month
    let days = new Date(yearNum, monthNames.indexOf(month) + 1, 0).getDate();  
    
    // Start interval begins on the 1st of that month
    intervalStart = new Date(`${yearNum}/${month}/1`); 
    //The end interval is calculated by adding the total days of the month to the date of the start interval
    intervalEnd.setTime(intervalStart.getTime() + (days * 86400000) -1 ); 
    
    // The number of leads and customers from the previous 3 months and the current month is calculated 
    // by going through the backendData
    for (let index = 1; index < 5; index++) {

      backendData.map( (el) =>{
      
      if( Date.parse(el.createDate) > intervalStart.getTime() 
          && Date.parse(el.createDate) < intervalEnd.getTime())
        {
          
          (Date.parse(el.createDate) == Date.parse(el.dateSubscriber)) ?  contSubscriber += 1
          : (Date.parse(el.createDate) == Date.parse(el.dateLead)) ?   contLead += 1 
          : (Date.parse(el.createDate) == Date.parse(el.dateMarketingQualifiedLead)) ?  contMarketingQLead += 1 
          : (Date.parse(el.createDate) == Date.parse(el.dateSalesQualifiedLead)) ?  contSalesQLead += 1 
          : (Date.parse(el.createDate) == Date.parse(el.dateOpportunity)) ?  contOpportunity += 1 
          : (Date.parse(el.createDate) == Date.parse(el.dateCustomer)) ?  contCustomer += 1 
          : (Date.parse(el.createDate) == Date.parse(el.dateEvangelist)) ?  contEvangelist += 1
          :  contOther =+ 1; 
        }

    
      });
      // The data is loaded into the array of objects that will be returned.
      dataChartContact[index-1] = { month: month, 
                                    suscriber: contSubscriber,
                                    lead: contLead,
                                    marketingQLead: contMarketingQLead,
                                    salesQLead: contSalesQLead,
                                    opportunity: contOpportunity,
                                    customer: contCustomer,
                                    evangelist: contEvangelist,
                                    other: contOther
                                  }
  
      // Counters are brought back to zero to count the following month
      contSubscriber = contLead = contMarketingQLead = contSalesQLead = 0;
      contOpportunity = contCustomer = contEvangelist = contOther = 0;
      
      // 1 second is added to move to the starting day of the following month
      intervalStart.setTime(intervalEnd.getTime() + (index * 1000));

      [day, month, dayNum, yearNum, time] = intervalStart.toString().split(" ").filter((el) => el !== "");
      days = new Date(yearNum, monthNames.indexOf(month) + 1, 0).getDate();
      intervalEnd.setTime(intervalStart.getTime() + (days * 86399950));
      
    } 
    console.log(dataChartContact);
    

  return {
    dataChartContact
  }
}
