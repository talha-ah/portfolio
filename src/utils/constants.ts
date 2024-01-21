import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

export const API_LIMIT = publicRuntimeConfig.apiLimit

export const BASE_URL = `${publicRuntimeConfig.apiPath}/api/${publicRuntimeConfig.apiVersion}`

export const DRAWER_WIDTH = 260
export const APP_BAR_HEIGHT = 65

export const APP_NAME = publicRuntimeConfig.appName

export const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
export const DAYS: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
export const YEARS: string[] = Array.from(new Array(10), (_, i) =>
  String(new Date().getFullYear() - i)
).reverse()

export const ENDPOINTS = {
  // Auth
  login: "/auth/login",
  authProfile: "/auth/profile",

  // Profile
  profile: "/profile",
  profileTheme: "/profile/theme",

  // Github
  githubZen: "/api/github/zen",
  githubOctocat: "/api/github/octocat",
  githubVerify: "/api/github/verify",
  githubToken: "/api/github/token",
  githubLogin: "/api/github/login",
  github: "/api/github/:user",
  githubRepositories: "/api/github/:user/repositories", // sort by star (.star)
  githubContributed: "/api/github/:user/contributed", // sort by star (.star)
  githubCommits: "/api/github/:user/commits", // sort by totalCommits (.totalCommits)
  githubLanguages: "/api/github/:user/languages",
  githubOrganizations: "/api/github/:user/organizations",
  githubUpdateStatus: "/api/github/:user/update",
  githubUpdate: "/api/github/:user/update",
  githubHotmap: "/api/github/:user/hotmap",
  githubContributions: "/api/github/:user/contributions",
  githubLanguagesStats: "/api/github/:user/languages/stats",

  // Scientific
  scientific: "/scientific",
  scientificStatistics: "/scientific/:user/statistic",
  scientificPredictions: "/scientific/:user/predictions",
}
