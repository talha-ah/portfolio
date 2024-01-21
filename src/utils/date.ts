import dayjs from "dayjs"

export const getLocaleDate = () => new Date().toLocaleString()

export const strToDate = (date: Date, format = "DD-MM-YYYY") => {
  if (!date) return ""
  return dayjs(date, format).toDate()
}

export const formatDate = (
  date: Date | string | null,
  format = "MMM DD, YYYY"
) => {
  if (!date) return ""
  return dayjs(date).format(format)
}

export const addDays = (date: Date, days: number) => {
  return dayjs(date).add(days, "days").toDate()
}

export const isDateAfter = (date1: Date, date2: Date) => {
  return dayjs(date1).isAfter(dayjs(date2))
}

export const difference = (date1: Date, date2: Date, unit: any = "days") => {
  return dayjs(date2).diff(date1, unit)
}
