import * as React from "react"
import { useState, useEffect } from "react"

import { Box, Fab, Theme } from "@mui/material"
import { KeyboardArrowUp } from "@mui/icons-material"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Width } from "@utils/types"

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
  },
  content: (mb: string) => ({
    paddingBottom: mb,
    paddingTop: "48px",
    backgroundColor: (theme: Theme) => theme.palette.background.default,
    transition: (theme: Theme) =>
      theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  }),
  fab: (visibility: boolean) => ({
    display: "block",
    position: "fixed",
    transition: "all 0.5s ease",
    opacity: visibility ? 1 : 0,
    right: (theme: Theme) => theme.spacing(3),
    bottom: (theme: Theme) => theme.spacing(3),
    zIndex: (theme: Theme) => theme.zIndex.fab,
    pointerEvents: visibility ? "auto" : "none",
  }),
}

export const HeaderLayout = ({
  children,
  mb = "48px",
}: {
  mb?: string
  children: React.ReactNode
}) => {
  const maxWidth: Width = "xl"

  const [fabVisibility, setFabVisibility] = useState(false)

  const handleVisibleButton = () => {
    const position = window.scrollY

    setFabVisibility(position > window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton)

    return () => window.removeEventListener("scroll", handleVisibleButton)
  }, [])

  return (
    <Box sx={styles.root}>
      <Header maxWidth={maxWidth} />

      <Box component="main" sx={() => styles.content(mb)}>
        {children}
      </Box>

      <Footer maxWidth={maxWidth} />

      <Fab
        color="primary"
        variant="extended"
        aria-label="scroll-to-top"
        sx={() => styles.fab(fabVisibility)}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <KeyboardArrowUp />
      </Fab>
    </Box>
  )
}
