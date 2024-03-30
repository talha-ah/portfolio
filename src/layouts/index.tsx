import React from "react"

import { Container } from "@mui/material"
import { styled } from "@mui/material/styles"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Width } from "@utils/types"
import { ActionHeader } from "@ui/ActionHeader"
import { APP_BAR_HEIGHT } from "@utils/constants"

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

const Content = styled("main")({
  padding: `20px 0`,
  marginTop: `${APP_BAR_HEIGHT}px`,
  minHeight: `calc(100% - ${2 * APP_BAR_HEIGHT}px)`,
})

export const HeaderLayout = ({
  title,
  actions,
  children,
  withBackButton,
}: {
  title?: string
  withBackButton?: boolean
  actions?: React.ReactNode
  children?: React.ReactNode
}) => {
  const maxWidth: Width = "xl"

  return (
    <Main>
      <Header maxWidth={maxWidth} />

      <Content>
        <Container maxWidth={maxWidth}>
          {/* Page Header */}
          {title && (
            <ActionHeader
              title={title}
              sx={{ borderBottom: "none" }}
              withBackButton={withBackButton}
            >
              {actions}
            </ActionHeader>
          )}

          {children}
        </Container>
      </Content>

      <Footer maxWidth={maxWidth} />
    </Main>
  )
}
