

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
    const dataChartBarCompanies = [ { name: "Subscriber", value: contSubscriber },
                                    { name: "Lead", value: contLead },
                                    { name: "Market Lead", value: contMarketingQLead }, 
                                    { name: "Sales lead", value: contSalesQLead }, 
                                    { name: "Opportunity", value: contOpportunity }, 
                                    { name: "Customer", value: contCustomer }, 
                                    { name: "Evangelist", value: contEvangelist }, 
                                    { name: "Others", value: contOther }, 
                                    { name: "Undefined", value: contUndefined }, 
                                ];
    // console.log("Others:  ", contOthers);
    return {
        dataChartBarCompanies
    }
}
