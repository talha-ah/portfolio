import React, { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

import { LogoSplash } from "@ui/Logo"
import { AuthTypes, useAppContext } from "@contexts/index"

export function AuthGuard({
  children,
  requireAuth,
}: Readonly<{
  requireAuth?: boolean
  children: JSX.Element
}>) {
  const router = useRouter()
  const pathname = usePathname()

  const { state, dispatch } = useAppContext()

  const { user, initializing } = state.auth

  useEffect(() => {
    if (!initializing && requireAuth) {
      // auth is initialized and there is no user
      if (!user) {
        // remember the page that user tried to access
        dispatch({
          type: AuthTypes.SET_REDIRECT,
          payload: { redirect: pathname },
        })
        // redirect
        router.push("/auth/login")
      }
    }
  }, [initializing, router, pathname, user, dispatch, requireAuth])

  /* show loading indicator while the auth provider is still initializing */
  if (initializing) return <LogoSplash />

  // if page initialized and doesn't require auth, show it
  if (!requireAuth) return children

  // if auth initialized with a valid user show protected page
  if (requireAuth && user) return children

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}
