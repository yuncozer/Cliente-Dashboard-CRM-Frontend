

export const DataCardDealsAccountsManager = (backendDataDeals, backendDataOwners) => {
  
  let dataDeals = [];

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
      if(!elDeal.idOwner && (elDeal.isClosed == 'false')){
        dataDeals[index]= {
          idDeal: elDeal.id,
          nameDeal: elDeal.name,
          amount: elDeal.amount,
          nextStep: elDeal.nextStep,
          color: 'red'
        }
      }
    })
  })
  return {
        dataDeals
  }
}
