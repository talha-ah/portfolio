import { useRouter } from "next/router"
import React, { useCallback } from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container } from "@mui/material"

import { Link } from "@ui/Link"
import { Logo } from "@ui/Logo"
import { UserMenu } from "@ui/UserMenu"
import { SelectTheme } from "@forms/profile"
import { useAppContext } from "@contexts/index"
import { APP_BAR_HEIGHT } from "@utils/constants"
import { Width, Link as LinkType } from "@utils/types"

const styles = {
  root: (theme: Theme) => ({
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    position: "fixed",
    zIndex: theme.zIndex.appBar,
    height: `${APP_BAR_HEIGHT}px`,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,

    "@media print": {
      display: "none",
    },
  }),
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    gap: 4,
    display: "flex",
    alignItems: "center",
  },
}

const AuthenticatedLinks: LinkType[] = [
  {
    to: "/",
    exact: true,
    label: "Home",
  },
  {
    label: "Profile",
    to: "/profile",
  },
]

const UnauthenticatedLinks: LinkType[] = [
  {
    to: "/",
    exact: true,
    label: "Home",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  // {
  //   label: "Github",
  //   to: "/github",
  // },
]

const Links = ({ links }: { links: LinkType[] }) => {
  const router = useRouter()

  const getColor = useCallback(
    (pathname: string, exact?: boolean) => {
      if (exact) {
        return pathname === router.pathname ? "primary.main" : "text.primary"
      }

      return router.pathname.startsWith(pathname)
        ? "primary.main"
        : "text.primary"
    },
    [router.pathname]
  )

  return (
    <Box sx={styles.items}>
      {links.map(({ label, to, exact }: LinkType) => (
        <Link key={to} to={to as string} color={getColor(to as string, exact)}>
          {label}
        </Link>
      ))}
    </Box>
  )
}

export const Header = ({ maxWidth }: { maxWidth: Width }) => {
  const { state } = useAppContext()

  return (
    <Box component="header" sx={styles.root}>
      <Container maxWidth={maxWidth} sx={styles.container}>
        <Logo />

        <Links
          links={state.auth.isAuth ? AuthenticatedLinks : UnauthenticatedLinks}
        />

        <Box sx={styles.items}>
          <SelectTheme />

          {state.auth.isAuth ? <UserMenu /> : null}
        </Box>
      </Container>
    </Box>
  )
}
