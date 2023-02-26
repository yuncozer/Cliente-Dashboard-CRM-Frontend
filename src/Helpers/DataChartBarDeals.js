

export const DataChartBarDeals = (backendData) => {

    let contAppointmentScheduled = 0; let amountAS = 0; let predictedAmountAS = 0;
    let contQualifiedToBuy = 0; let amountQTB = 0; let predictedAmountQTB = 0;
    let contPresentationScheduled = 0; let amountPS = 0; let predictedAmountPS = 0;
    let contDecisionMakerBoughtIn = 0; let amountDMB = 0; let predictedAmountDMB = 0;
    let contContractSent = 0; let amountCS = 0; let predictedAmountCS = 0;


    backendData.map(el => {
        switch (el.stage) {

            case "appointmentscheduled":
                contAppointmentScheduled += 1;
                amountAS = amountAS + parseInt(el.amount);
                predictedAmountAS = predictedAmountAS + parseInt(el.predictedAmount);
                break;

            case "qualifiedtobuy":
                contQualifiedToBuy += 1;
                amountQTB = amountQTB + parseInt(el.amount);
                predictedAmountQTB = predictedAmountQTB + parseInt(el.predictedAmount);
                break;

            case "presentationscheduled":
                contPresentationScheduled += 1;
                amountPS = amountPS + parseInt(el.amount);
                predictedAmountPS = predictedAmountPS + parseInt(el.predictedAmount);
                break;

            case "decisionmakerboughtin":
                contDecisionMakerBoughtIn += 1;
                amountDMB = amountDMB + parseInt(el.amount);
                predictedAmountDMB = predictedAmountDMB + parseInt(el.predictedAmount);
                break;

            case "contractsent":
                contContractSent += 1;
                amountCS = amountCS + parseInt(el.amount);
                predictedAmountCS = predictedAmountCS + parseInt(el.predictedAmount);
                break;

            default:
                break;
        }
    })

    const dataChartBarDeals = [
        {
            name: 'Appointment Scheduled',
            totalAmount: amountAS,
            totalPredictedAmount: predictedAmountAS,
            totalDeals: contAppointmentScheduled
        },
        {
            name: 'Qualified to buy',
            totalAmount: amountQTB,
            totalPredictedAmount: predictedAmountQTB,
            totalDeals: contQualifiedToBuy
        },
        {
            name: 'Presentation Scheduled',
            totalAmount: amountPS,
            totalPredictedAmount: predictedAmountPS,
            totalDeals: contPresentationScheduled
        },
        {
            name: 'Decision Maker Bought-In',
            totalAmount: amountDMB,
            totalPredictedAmount: predictedAmountDMB,
            totalDeals: contDecisionMakerBoughtIn
        },
        {
            name: 'Contract Sent',
            totalAmount: amountCS,
            totalPredictedAmount: predictedAmountCS,
            totalDeals: contContractSent
        }
    ]

    return {
        dataChartBarDeals
    }
}