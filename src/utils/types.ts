import React from "react"

export type Status = "active" | "inactive"
export type ThemeMode = "light" | "dark" | "system"
export type Width = "xs" | "sm" | "md" | "lg" | "xl"
export type Interval = "day" | "week" | "month" | "year"
export type Align = "right" | "inherit" | "left" | "center" | "justify"

export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"

export type Freeze<T> = {
  readonly [P in keyof T]: T[P]
}

export interface AuthStateType {
  isAuth: boolean
  loading: boolean
  theme: ThemeMode

  redirect: string
  initializing: boolean
}

export interface ActionType {
  type: string
  payload: any
}

export interface AuthInitialStateType extends AuthStateType, LoginResponse {}

export interface APIParams {
  body?: any
  url: string
  method?: string
  local?: boolean
  message?: string
  contentType?: string
  notifyError?: boolean
}

export interface Pagination {
  page?: number
  limit?: number
  totalData?: number
  totalPages?: number
}

export interface ApiResponse {
  data: any
  message: string
  success: boolean
  pagination?: Pagination
}

export interface ErrorWithMessage {
  message: string
  status?: number
}

export interface Option {
  key: string
  value: string | React.ReactNode
}

export interface IAxiosConfig {
  method: string
  url: string
  data?: any
  headers?: any
}

export interface Link {
  icon?: any
  to?: string
  label: string
  color?: string
  exact?: boolean
  onClick?: () => void
}

export interface DataTableHeader {
  key: string
  value: string
  sort?: string
  align?: Align
  filter?: string
  sortable?: boolean
  filterable?: boolean
  width?: string | number
  minWidth?: string | number
  format?: (value: any) => string
  onSort?: () => React.ReactNode[]
  actions?: () => React.ReactNode[]
  render?: (value: any, index: number) => React.ReactNode
}

export interface LoginResponse {
  user: User | null
  accessToken: string
  refreshToken: string
}

export interface Location {
  lat: number
  long: number
}

export interface Address {
  addressOne: string
  addressTwo?: string
  addressThree?: string
  postalCode: string
  city: string
  state: string
  country: string
  location?: Location
}

export interface User {
  _id: string
  name: string
  email: string
  phone?: string
  firstName: string
  lastName?: string
  status?: Status | "pending" | "blocked"
}
