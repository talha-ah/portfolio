import React from "react"

import { Theme } from "@mui/material/styles"
import { Box, Container } from "@mui/material"

import { Link } from "@ui/Link"
import { Width } from "@utils/types"

const styles = {
  root: (theme: Theme) => ({
    width: "100%",
    padding: theme.spacing(2),

    "@media print": {
      display: "none",
    },
  }),
  container: {
    gap: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}

export const Footer = ({ maxWidth }: { maxWidth: Width }) => {
  return (
    <Box sx={styles.root} component="footer">
      <Container maxWidth={maxWidth} sx={styles.container}>
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://www.linkedin.com/in/talha-ah"
        >
          LinkedIn
        </Link>

        <Link target="_blank" rel="noreferrer" to="https://github.com/talha-ah">
          GitHub
        </Link>

        <Link
          target="_blank"
          rel="noreferrer"
          to="https://twitter.com/talha__ah"
        >
          Twitter
        </Link>
      </Container>
    </Box>
  )
}
