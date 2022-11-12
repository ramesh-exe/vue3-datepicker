export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
export const weekdayName = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]

const WEEKDAYS = [...Array(7).keys()]
const getOrderedWeekdays = (weekStartsOn) => {
    const weekDays = [...WEEKDAYS]
    const restOfDays = weekDays.splice(weekStartsOn)
    return [...restOfDays, ...weekDays]
}

const WEEK_LENGTH = 7
export const getWeeksForMonth = (month, year, weekStartsOn = 0) => {
    const firstOfMonth = new Date(year, month, 1)
    const firstDayOfWeek = firstOfMonth.getDay()
    const weeks = [[]]
    let currentWeek = weeks[0]
    let currentDate = firstOfMonth
    const orderedWeekday = getOrderedWeekdays(weekStartsOn)
    for (let i = 0; i < orderedWeekday.indexOf(firstDayOfWeek); i++) {
        currentWeek.push(null)
    }
    while (currentDate.getMonth() === month) {
        if (currentWeek.length === WEEK_LENGTH) {
            currentWeek = []
            weeks.push(currentWeek)
        }
        currentWeek.push(currentDate)
        currentDate = new Date(year, month, currentDate.getDate() + 1)
    }
    while (currentWeek.length < 7) {
        currentWeek.push(null)
    }
    return weeks
}
  