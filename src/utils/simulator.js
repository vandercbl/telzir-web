import listPlans from '../store/plans'
import priceDDD from '../store/price-ddd'

function simulator(origin, destiny, minutesCall, plan) {
	const minutesPlan = timePlan(plan)
	const tariffCall = tariffDDD(origin, destiny)
	const timeBalance = minutesCall - minutesPlan
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

function timePlan(plan) {
	const itemPlan = listPlans.find((item) => item.name === plan)
	return itemPlan.minutes
}

function tariffDDD(origin, destiny) {
	const tariff = priceDDD.find(
		(item) => item.origin === origin && item.destiny === destiny,
	)
	return tariff.price
}

export default simulator
