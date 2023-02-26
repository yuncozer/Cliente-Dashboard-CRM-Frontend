

export const DataChartBarCompanies = (backendData) => {


    let contSubscriber = 0        // subscriber counter
    let contLead = 0;             // counter counter
    let contMarketingQLead = 0;   // marketingqualifiedlead counter
    let contSalesQLead = 0;       // salesqualifiedlead counter
    let contOpportunity = 0;      // opportunity counter
    let contCustomer = 0;         // customer counter
    let contEvangelist = 0;       // evangelist counter
    let contOther = 0;            // other counter
    let contUndefined = 0;        // counter undefined


    // Calculate total contacts in CRM
    const dataLength = backendData.length;

    backendData.map((el) => {

        (el.lifeCycleStage === "subscriber") ? contSubscriber += 1 : (el.lifeCycleStage === "lead") ? contLead += 1 :
        (el.lifeCycleStage === "marketingqualifiedlead") ? contMarketingQLead += 1 : (el.lifeCycleStage === "salesqualifiedlead") ? contSalesQLead += 1 :
        (el.lifeCycleStage === "opportunity") ? contOpportunity += 1 : (el.lifeCycleStage === "customer") ? contCustomer += 1 :
        (el.lifeCycleStage === "evangelist") ? contEvangelist += 1 : (el.lifeCycleStage === "other") ? contOther += 1 :
            contUndefined += 1;
    })
    const dataChartBarCompanies = [ { name: "Subscriber", total: contSubscriber },
                                    { name: "Lead", total: contLead },
                                    { name: "Market Lead", total: contMarketingQLead }, 
                                    { name: "Sales lead", total: contSalesQLead }, 
                                    { name: "Opportunity", total: contOpportunity }, 
                                    { name: "Customer", total: contCustomer }, 
                                    { name: "Evangelist", total: contEvangelist }, 
                                    { name: "Others", total: contOther }, 
                                    { name: "Undefined", total: contUndefined }, 
                                ];
    // console.log("Others:  ", contOthers);
    return {
        dataChartBarCompanies
    }
}
