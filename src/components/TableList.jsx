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
    console.log("PERROO ", isLoading);
    if (!isLoading && data.length == 0) options.textLabels.body.noMatch = "Sorry, no matching records found";

    return (
                <div className='sm:col-span-4 items-center justify-center mt-4'>
                    <MUIDataTable 
                        title={"ENGAGEMENT DONE BY DEAL OWNERS LAST WEEK (ACCOUNT MANAGERS)"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </div>
            )

    
}

// export const TableList = () => {
//   return (
//     <div className='flex flex-col mt-4 col-start-1 col-end-4'>
//         <span className='font-semibold text-white text-2xl mb-5'>Accounts Manager Activity</span>
//         <div className='bg-secondary-100 p-8 rounded-xl '>
//             <div className='hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4'>
//                 <h5>ID</h5>
//                 <h5>Name</h5>
//                 <h5>Status</h5>
//                 <h5>Actions</h5>
//                 <h5>Date</h5>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 p-4 sm:text-center bg-secondary-900 rounded-xl'>
//                 <div>
//                     <span>#25342</span>
//                 </div>
//                 <div>
//                     <p>Daniel Cardenas</p>
//                 </div>
//                 <div>
//                     <p>CRM Manager</p>
//                 </div>
//                 <div>
//                     <p>Add deals</p>
//                 </div>
//                 <div>
//                     <p>10/01/2023</p>
//                 </div>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 p-4 sm:text-center bg-secondary-900 rounded-xl'>
//                 <div>
//                     <span>#25342</span>
//                 </div>
//                 <div>
//                     <p>Daniel Cardenas</p>
//                 </div>
//                 <div>
//                     <p>CRM Manager</p>
//                 </div>
//                 <div>
//                     <p>Add deals</p>
//                 </div>
//                 <div>
//                     <p>10/01/2023</p>
//                 </div>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 p-4 sm:text-center bg-secondary-900 rounded-xl'>
//                 <div>
//                     <span>#25342</span>
//                 </div>
//                 <div>
//                     <p>Daniel Cardenas</p>
//                 </div>
//                 <div>
//                     <p>CRM Manager</p>
//                 </div>
//                 <div>
//                     <p>Add deals</p>
//                 </div>
//                 <div>
//                     <p>10/01/2023</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
