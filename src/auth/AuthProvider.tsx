import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

import { useApi } from "@hooks/useApi"
import { ENDPOINTS } from "@utils/constants"
import { useSystemTheme } from "@hooks/useSystemTheme"
import { getBrowserItem } from "@utils/browser-utility"
import { AuthTypes, useAppContext } from "@contexts/index"

export const AuthProvider = ({ children }: { children: any }) => {
  const router = useRouter()
  const pathname = usePathname()

  const { theme } = useSystemTheme()
  const { dispatch } = useAppContext()

  const API = useApi()

  const checkAuth = async () => {
    let route = "/"

    try {
      const token = getBrowserItem()

      if (!token) {
        route = pathname

        dispatch({ type: AuthTypes.LOGOUT })
        return
      }

      const response = await API({ url: ENDPOINTS.authProfile })

      dispatch({ type: AuthTypes.LOGIN, payload: response?.data })

      if (!pathname.startsWith("/login")) route = pathname
    } catch (error: any) {
    } finally {
      if (route !== pathname) router.replace(route)
      dispatch({
        type: AuthTypes.SET_INITIALIZED,
        payload: { initializing: false },
      })
    }
  }

  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch({ type: AuthTypes.SET_THEME, payload: { theme } })
  }, [theme, dispatch])

  return children
}
