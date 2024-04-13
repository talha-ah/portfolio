import React from "react"
import { motion } from "framer-motion"

import { Box, Theme, Container, Typography, SxProps } from "@mui/material"

const styles = {
  root: {
    width: "100%",
    display: "flex",
    minHeight: "90vh",
    flexDirection: "column",
    justifyContent: "center",
    // scrollSnapAlign: "start",
    p: {
      xs: "130px 0 88px 0",
      md: "160px 0 88px 0",
    },
  },
  title: {
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: "1.132em",
    color: "text.primary",
    fontSize: "clamp(40px, 8vw, 80px)",
  },
  heading: {
    fontWeight: "700",
    paddingLeft: "28px",
    lineHeight: "1.1em",
    position: "relative",
    marginBottom: "40px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontSize: "clamp(20px, 8vw, 32px)",

    "&::before": {
      top: 0,
      left: 0,
      content: '"/"',
      position: "absolute",
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },
}

type SxPropsExtended = SxProps & { backgroundColor?: string }

export const Section = ({
  id,
  sx,
  title,
  heading,
  children,
  backgroundColor,
}: {
  id?: string
  title?: string
  heading?: string
  sx?: SxPropsExtended
  backgroundColor?: string
  children: React.ReactNode
}) => {
  return (
    <Box
      id={id}
      sx={
        {
          ...styles.root,
          ...sx,
          backgroundColor,
        } as SxPropsExtended
      }
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          damping: 20,
          duration: 0.5,
          type: "spring",
        }}
      >
        <Container maxWidth="xl">
          {title && (
            <Typography variant="h1" sx={styles.title}>
              {title}
            </Typography>
          )}
          {heading && (
            <Typography variant="h3" sx={styles.heading}>
              {heading}
            </Typography>
          )}

          {children}
        </Container>
      </motion.div>
    </Box>
  )
}
