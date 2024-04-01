import { CssBaseline, StyledEngineProvider } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { theme } from "./theme"

import componentsOverride from "./overrides"

export default function ThemeCustomization({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const customTheme = createTheme(theme())
  customTheme.components = componentsOverride(customTheme)

  return (
    <StyledEngineProvider injectFirst>
      {/* Inject Emotion before JSS */}
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
