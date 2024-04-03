import React from "react"

import { styled } from "@mui/material/styles"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Width, Link as LinkType } from "@utils/types"

const Main = styled("div")(({ theme }) => ({
  padding: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  /* width */
  "&::-webkit-scrollbar": {
    width: 5,
    height: 5,
    backgroundColor: "transparent",
  },
  /* Track */
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  /* Thumb */
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 8,
    backgroundColor: "#babac0",
  },
  /* Thumb:hover */
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#babac0",
  },
  /* Button (top and bottom of the scrollbar) */
  "&::-webkit-scrollbar-button": {
    display: "none",
  },
}))

const Content = styled("main")(({ mb }: { mb: string }) => ({
  paddingBottom: mb,
  paddingTop: "48px",
  // minHeight: "calc(100vh - 38%)",
}))

const links: LinkType[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/#about",
    label: "About",
  },
  {
    to: "/#experience",
    label: "Experience",
  },
  {
    to: "/#projects",
    label: "Projects",
  },
]

export const HeaderLayout = ({
  children,
  mb = "48px",
}: {
  mb?: string
  children?: React.ReactNode
}) => {
  const maxWidth: Width = "xl"

  return (
    <Main>
      <Header maxWidth={maxWidth} links={links} />

      <Content mb={mb}>{children}</Content>

      <Footer maxWidth={maxWidth} links={links} />
    </Main>
  )
}
