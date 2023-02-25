
export const DataChartPieCompanies = (backendData) => {

let contProspect = 0
let contPartner = 0
let contReseller = 0
let contVendor = 0 
let contOthers = 0
let contUndefined = 0

backendData.map( (el) => {
   // Calculate how many companies have for each type
    (el.type === "PROSPECT") ? contProspect += 1 : (el.type === "PARTNER") ? contPartner += 1 :
    (el.type === "RESELLER") ? contReseller += 1 : (el.type === "VENDOR") ? contVendor += 1 : 
    (el.type === "OTHER") ? contOthers += 1 : contUndefined += 1;
    });
const dataChartPieCompanies = [ {name: "Total Prospects", value: contProspect},
                                {name: "Total Partners", value: contPartner},
                                {name: "Total Reseller", value: contReseller},
                                {name: "Total Vendor", value: contVendor},
                                {name: "Total Other", value: contOthers},
                                {name: "Total Other", value: contUndefined} 
                            ];

    return {
        dataChartPieCompanies, contProspect, contPartner, contReseller, contVendor, contOthers, contUndefined
    }
}
