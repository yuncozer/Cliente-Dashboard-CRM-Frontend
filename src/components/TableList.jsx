import React  from 'react';
import MUIDataTable from "mui-datatables";


const columns = [
    {
        name: "nameDeal",
        label: "Name Deal"
    },
    {
        name: "typeActivity",
        label: "Type Activity"
    },
    {
        name: "createDate",
        label: "Create Date"
    },
    {
        name: "ownerActivityName",
        label: "Activity Owner"
    },
];


export const TableList = ({data, isLoading}) => {

    var options   = {
        download: false,
        elevation: 1,
        filterType: "dropdown",
        jumpToPage: true,
        responsive: 'standard',
        rowsPerPage: 5,
        rowsPerPageOptions: [5,10,15],
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        textLabels: { body: {
                                noMatch: "Loading data..."
                            }
                    }
    };

    if (!isLoading && data.length == 0) options.textLabels.body.noMatch = "Sorry, no matching records found";

    return (<div className='sm:col-span-4 items-center justify-center mt-4'>
                <MUIDataTable 
                    title={"ENGAGEMENT DONE BY DEAL OWNERS LAST WEEK (ACCOUNT MANAGERS)"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>)    
}