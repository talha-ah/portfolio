import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
import { Menu, Close } from "@mui/icons-material"

import { Link } from "@ui/Link"
import { Logo } from "@ui/Logo"
import { Dialog } from "@ui/Dialog"
import { IconButton } from "@ui/IconButton"
import { Width, Link as LinkType } from "@utils/types"
import { useIsMobile } from "@hooks/useIsMobile"

const glassmorphism = {
  opacity: 0.9,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  // background: "rgba(0, 0, 0, 0.2)",
}

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
    ...glassmorphism,

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
    fontWeight: 700,
    lineHeight: "1.111em",
    fontSize: {
      xs: "40px",
      md: "90px",
    },

    "&:hover": {
      color: "primary.main",
    },
  },
  linksHorizontal: {
    gap: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linkHorizontal: {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "1.667em",

    "&:hover": {
      color: "primary.main",
    },
  },
}

const Links = ({ links }: { links: LinkType[] }) => (
  <Box sx={styles.linksHorizontal}>
    {links.map(({ label, to }: LinkType) => (
      <Link key={to} to={to as string} sx={styles.linkHorizontal}>
        {label}
      </Link>
    ))}
  </Box>
)

export const Header = ({
  links,
  maxWidth,
}: {
  maxWidth: Width
  links: LinkType[]
}) => {
  const { isMobile } = useIsMobile()

  return (
    <Box component="header" sx={styles.root}>
      <Container maxWidth={maxWidth} sx={styles.container}>
        <Logo />

        {isMobile ? (
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
        ) : (
          <Links links={links} />
        )}
      </Container>
    </Box>
  )
}
