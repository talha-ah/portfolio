import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
import { Menu, Close } from "@mui/icons-material"

import { Link } from "@ui/Link"
import { Logo } from "@ui/Logo"
import { Dialog } from "@ui/Dialog"
import { IconButton } from "@ui/IconButton"
import { Width, Link as LinkType } from "@utils/types"

const styles = {
  root: (theme: Theme) => ({
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    padding: "36px 0",
    position: "sticky",
    zIndex: theme.zIndex.drawer * 2,
    backgroundColor: theme.palette.background.default,

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
  links: (theme: Theme) => ({
    gap: 6,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
  }),
  link: {
    fontSize: {
      xs: "40px",
      md: "90px",
    },
    fontWeight: 700,
    lineHeight: "1.111em",
    "&:hover": {
      color: "primary.main",
    },
  },
}

export const Header = ({
  links,
  maxWidth,
}: {
  maxWidth: Width
  links: LinkType[]
}) => {
  return (
    <Box component="header" sx={styles.root}>
      <Container maxWidth={maxWidth} sx={styles.container}>
        <Logo />

        <Dialog
          fullScreen
          trigger={({ open, toggleOpen }) => (
            <IconButton onClick={toggleOpen}>
              {open ? <Close /> : <Menu />}
            </IconButton>
          )}
          content={() => (
            <Box sx={styles.links}>
              {links.map(({ label, to }: LinkType) => (
                <Link key={to} sx={styles.link} to={to as string}>
                  {label}
                </Link>
              ))}
            </Box>
          )}
        />
      </Container>
    </Box>
  )
}
