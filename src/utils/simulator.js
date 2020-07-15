function simulator(
	origin,
	destiny,
	minutesCall,
	plan,
	listPlans,
	listPriceDDD,
) {
	const minutesPlan = Number(timePlan(plan, listPlans))
	const tariffCall = Number(tariffDDD(origin, destiny, listPriceDDD))
	const timeBalance = Number(minutesCall - minutesPlan)
	const totalWithPlan = calcWithPlan(timeBalance, tariffCall)
	const totalWithoutPlan = calcWithoutPlan(minutesCall, tariffCall)
	return {
		origin: origin,
		destiny: destiny,
		minutesCall: minutesCall,
		plan: plan,
		totalWithPlan: totalWithPlan,
		totalWithoutPlan: totalWithoutPlan,
	}
}

function calcWithPlan(balance, tariff) {
	if (balance <= 0) return 0
	return balance * (tariff + tariff * 0.1)
}

function calcWithoutPlan(minutes, tariff) {
	return minutes * tariff
}

function timePlan(plan, listPlans) {
	const itemPlan = listPlans.find((item) => item.name === plan)
	return itemPlan.minutes
}

function tariffDDD(origin, destiny, listPriceDDD) {
	const tariff = listPriceDDD.find(
		(item) => item.origin === origin && item.destiny === destiny,
	)
	return tariff.price
}

export default simulator
