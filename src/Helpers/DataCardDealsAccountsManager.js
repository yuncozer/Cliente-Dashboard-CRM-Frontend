

export const DataCardDealsAccountsManager = (backendDataDeals, backendDataOwners) => {
  
  let dataDeals = [];
    // const colors = ["brown",
    //                 "deep-orange",
    //                 "orange",
    //                 "light-green",
    //                 "green",
    //                 "teal",
    //                 "cyan",
    //                 "light-blue",
    //                 "blue",
    //                 "indigo",
    //                 "deep-purple",
    //                 "purple",
    //                 "pink",
    //                 "red"];


  backendDataDeals.map((elDeal, index)=> {
    backendDataOwners.map( elOwner => {
      if((elDeal.idOwner === elOwner.id) && (elDeal.isClosed == 'false')){
        // var color = colors[Math.floor(Math.random()*colors.length)];
        dataDeals[index]= {
            idDeal: elDeal.id,
            nameDeal: elDeal.name,
            amount: elDeal.amount,
            ownerName: elOwner.name,
            nextStep: elDeal.nextStep,
            color: 'indigo'
        }
      }
    })
  })
  return {
        dataDeals
  }
}
