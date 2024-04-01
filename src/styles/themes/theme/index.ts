import { PaletteMode } from "@mui/material"

const PRIMARY = "#075fe4"

const PAPER = "#22282f"
const BACKGROUND = "#1b1f24"

export const theme = () => {
  return {
    palette: {
      mode: "dark" as PaletteMode,
      primary: {
        main: PRIMARY,
      },
      divider: "#8895aa",
      background: {
        paper: PAPER,
        default: BACKGROUND,
      },
      text: {
        primary: "#ffffff",
        secondary: "#c3cad5",
      },
    },
    typography: {
      fontFamily: '"Space Grotesk", "Cambria", sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    direction: "ltr" as "ltr" | "rtl",
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 768,
        lg: 1024,
        xl: 1266,
      },
    },
  }
}
