import * as React from "react"

import { Typography } from "@mui/material"

import { Link } from "@ui/Link"
import { APP_NAME } from "@utils/constants"
import { GradientText } from "@ui/GradientText"

const styles = {
  root: {
    fontWeight: 700,
    fontSize: "1.6rem",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
  },
}

export const Logo = () => {
  return (
    <Typography variant="h5" component={Link} to="/" sx={styles.root}>
      <GradientText>{APP_NAME}</GradientText>
    </Typography>
  )
}
