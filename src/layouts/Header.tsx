import * as React from "react"

import { Theme } from "@mui/material/styles"
import { Menu, Close } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"

import { Logo } from "@ui/Logo"
import { Dialog } from "@ui/Dialog"
import { Button } from "@ui/Button"
import { IconButton } from "@ui/IconButton"
import { scrollIntoView } from "@utils/common"
import { useIsMobile } from "@hooks/useIsMobile"
import { Resume } from "@components/Resume/Main"
import { Width, Link as LinkType } from "@utils/types"
import { useResume } from "@components/Resume/useResume"

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
    gap: 4,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    justifyContent: {
      xs: "center",
      md: "flex-end",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
  }),
  link: {
    cursor: "pointer",
    fontSize: {
      xs: "40px",
      md: "20px",
    },
    fontWeight: {
      xs: 700,
      md: 500,
    },
    lineHeight: {
      xs: "1.111em",
      md: "1.667em",
    },

    "&:hover": {
      color: "primary.main",
    },
  },
  buttonLinks: {
    gap: 4,
    display: "flex",
    alignItems: "center",
  },
  resumeButton: {
    py: 0,
    fontWeight: 700,
  },
}

const links: LinkType[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/#experience",
    label: "Experience",
  },
  {
    to: "/#skills",
    label: "Skills",
  },
  {
    to: "/#projects",
    label: "Projects",
  },
]

const Links = ({ onClick }: { onClick?: () => void }) => (
  <Box sx={styles.links}>
    {links.map(({ label, to }: LinkType) => (
      <Typography
        key={to}
        component="a"
        sx={styles.link}
        onClick={() => {
          onClick?.()
          scrollIntoView(to as string)
        }}
      >
        {label}
      </Typography>
    ))}
  </Box>
)

export const Header = ({ maxWidth }: { maxWidth: Width }) => {
  const { isMobile } = useIsMobile()
  const { ref, onPrint, resume } = useResume()

  return (
    <Box id="header" component="header" sx={styles.root}>
      <Container maxWidth={maxWidth} sx={styles.container}>
        <Logo />

        <Box sx={styles.buttonLinks}>
          {isMobile ? (
            <Dialog
              fullScreen
              trigger={({ open, toggleOpen }) => (
                <IconButton onClick={toggleOpen}>
                  {open ? <Close /> : <Menu />}
                </IconButton>
              )}
              content={({ onClose }) => <Links onClick={onClose} />}
            />
          ) : (
            <>
              <Links />

              <Button size="small" onClick={onPrint} sx={styles.resumeButton}>
                Resume
              </Button>
            </>
          )}
        </Box>

        <Box display="none">
          <Resume ref={ref} {...resume} />
        </Box>
      </Container>
    </Box>
  )
}
