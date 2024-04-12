import axios from "axios"
import Router from "next/router"
import { IAxiosConfig } from "@utils/types"

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const getFullName = (user: any) => {
  let name = user.firstName
  if (user.lastName) name += " " + user.lastName
  return name
}

export const getInitials = (user: any) => {
  if (!user) return ""
  return (
    user.firstName.charAt(0) + (user.lastName ? user.lastName.charAt(0) : "")
  )
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

export const scrollIntoView = (id: string) => {
  if (!id) {
    window.scrollTo(0, 0)
    return
  }

  const path = id.split("#")[0]
  const section = id.split("#")[1]

  if (path !== Router.asPath.split("#")[0]) {
    Router.push(id)
    return
  }

  if (!id.includes("#")) {
    window.location.hash = ""
    window.scrollTo(0, 0)
    return
  }

  window.location.hash = section

  const element = document.getElementById(section)
  if (element) {
    document.getElementsByTagName("html")[0].style.scrollSnapType = "initial"
    document.getElementsByTagName("body")[0].style.scrollSnapType = "initial"

    element.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    })

    setTimeout(() => {
      document.getElementsByTagName("html")[0].style.scrollSnapType =
        "y mandatory"
      document.getElementsByTagName("body")[0].style.scrollSnapType =
        "y mandatory"
    }, 500)
  }
}

export const callAxios = async (config: IAxiosConfig) => {
  try {
    const response = await axios(config)
    return response.data
  } catch (err) {
    throw parseError(err)
  }
}

export const parseError = (err: any) => {
  let name = err.name || ""
  let status = err.status || 500
  let message = err.message || ""

  if (err.isAxiosError) {
    message = err.response.data
    status = err.response.status
  }

  console.log(`${name}: ${message}`)

  return { message, status, name }
}
