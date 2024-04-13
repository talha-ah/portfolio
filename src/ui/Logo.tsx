import * as React from "react"
import { useState, useRef, useEffect } from "react"

import { Box, Typography, LinearProgress } from "@mui/material"

import { Link } from "@ui/Link"
import { APP_NAME } from "@utils/constants"
import { GradientText } from "@ui/GradientText"
import { AuthTypes, useAppContext } from "@contexts/index"

const styles = {
  root: {
    fontWeight: 700,
    fontSize: "1.6rem",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
  },
  center: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
}

export const Logo = () => {
  return (
    <Typography variant="h5" component={Link} to="/" sx={styles.root}>
      <GradientText>{APP_NAME}</GradientText>
    </Typography>
  )
}

const BUFFER = 50

export const LogoSplash = () => {
  const { dispatch } = useAppContext()

  const [progress, setProgress] = useState(0)
  const [buffer, setBuffer] = useState(BUFFER)

  const progressRef = useRef(() => {})

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(BUFFER)
      } else {
        const diff = Math.random() * BUFFER
        const diff2 = Math.random() * BUFFER
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (progress > 100) {
      dispatch({
        type: AuthTypes.SET_INITIALIZED,
        payload: { initializing: false },
      })
    }
  }, [dispatch, progress])

  return (
    <Box sx={styles.center}>
      <Box>
        <Logo />

        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </Box>
    </Box>
  )
}
