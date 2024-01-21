export const getFullName = (user: any) => {
  let name = user.firstName
  if (user.lastName) name += " " + user.lastName
  return name
}

export const toTitleCase = (str: string) => {
  if (str) str = str.charAt(0).toUpperCase() + str.slice(1)

  return str
}

export const numberWithCommas = (x: any): string => {
  if (!x) return "0"
  return Number(String(x).replaceAll(",", "")).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
}
