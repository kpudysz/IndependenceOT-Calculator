import { addMinutes } from 'date-fns'

export const calculateStamina = (currentStamina: string, goalStamina: string) => {
    const [ currentHours, currentMinutes ] = currentStamina.split(':')
    const [ goalHours, goalMinutes ] = goalStamina.split(':')
    const goalInMinutes = Number(goalHours) * 60 + Number(goalMinutes)
    const currentInMinutes = Number(currentHours) * 60 + Number(currentMinutes)

    return calculateTime(currentInMinutes, goalInMinutes, 0)
}

export const calculateTime = (currentTime: number, goalTime: number, totalTime: number) => {
    if (currentTime === goalTime) {
        return totalTime
    }

    const incrementFactor = currentTime < 2340 ? 3 : 6
    const incrementedTotalTime = totalTime + incrementFactor

    return calculateTime(currentTime + 1, goalTime, incrementedTotalTime)
}

export const addMinutesToCurrentDate = (minutes: number) => addMinutes(Date.now(), minutes)

export const formatMinutesToStamina = (minutes: number) => {
    if (minutes < 60) {
        return {
            hours: 0,
            minutes
        }
    }

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60

    return {
        hours,
        minutes: remainingMinutes
    }
}
