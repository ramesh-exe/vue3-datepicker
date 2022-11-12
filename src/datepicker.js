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

export const isSameDay = (day1, day2) => {
    if (day1 && day2) {
      return (
        day1.getDate() === day2.getDate() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getFullYear() === day2.getFullYear()
      )
    }
    return false
}

export const isSelected = (dateRange, date) => {
    return dateRange.find(day => day.getTime() === date.getTime()) ? true : false
}

export const getDatesInRange = selectedDateRange => {
    const dates = []
    const start = selectedDateRange?.start
    const end = selectedDateRange?.end
    if (start && end) {
      const date = new Date(start.getTime())
      while (date <= end) {
        dates.push(new Date(date))
        date.setDate(date.getDate() + 1)
      }
    }
    return dates
}
  