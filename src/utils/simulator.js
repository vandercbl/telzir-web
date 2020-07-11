import listPlans from '../store/plans'

function simulator(origin, destiny, minutesCall, plan) {
	const minutesPlan = timePlan(plan)
	const timeBalance = minutesPlan - minutesCall

	calcWithPlan(timeBalance)
	calcWithoutPlan(timeBalance)
}

function calcWithPlan(minutes) {}

function calcWithoutPlan(minutes) {}

function timePlan(plan) {
	const itemPlan = listPlans.find((item) => {
		if (item.name === plan) return item.minutes
	})
	return itemPlan.minutes
}

export default simulator
