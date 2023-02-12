

export const DataCardDealsAccountsManager = (backendDataDeals, backendDataOwners) => {
  
  let dataDeals = [];

  backendDataDeals.map((elDeal, index)=> {
    backendDataOwners.map( elOwner => {
        console.log(elDeal.isClosed);
      if((elDeal.idOwner === elOwner.id)){
        console.log("HAMBURGUESAA");
        // dataDeals[index]= {
        //     nameDeal: elDeal.name,
        //     amount: elDeal.amount,
        //     ownerName: elOwner.name,
        //     nextStep: elDeal.nextStep
        // }
      }
    })
  })
  return {
        dataDeals
  }
}
