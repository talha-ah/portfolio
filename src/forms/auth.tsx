import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Grid, Box, Typography, Card as MuiCard } from "@mui/material"

import { Input } from "@ui/Input"
import { Alert } from "@ui/Alert"
import { Button } from "@ui/Button"
import { useApi } from "@hooks/useApi"
import { ENDPOINTS } from "@utils/constants"
import { AuthTypes, useAppContext } from "@contexts/index"

const Card = ({
  title,
  children,
  subtitle = `to continue to ${process.env.NEXT_PUBLIC_APP_NAME}`,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) => {
  return (
    <MuiCard
      variant="outlined"
      sx={{
        p: 4,
        maxWidth: "xs",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="body2" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
      )}

      {children}
    </MuiCard>
  )
}

export function LoginForm() {
  const API = useApi()
  const router = useRouter()
  const { state, dispatch } = useAppContext()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      setError(null)
      setLoading(true)

      const data = new FormData(event.currentTarget)

      const body = {
        email: data.get("email"),
        password: data.get("password"),
      }

      const response = await API({
        method: "POST",
        notifyError: false,
        uri: ENDPOINTS.login,
        body: JSON.stringify(body),
      })

      dispatch({
        type: AuthTypes.LOGIN,
        payload: response?.data,
      })

      router.replace(state.auth.redirect || "/")
      dispatch({ type: AuthTypes.SET_REDIRECT, payload: { redirect: "" } })
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Sign in">
      <Box noValidate component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              required
              autoFocus
              fullWidth
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              label="Email Address"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" fullWidth loading={loading}>
              Sign In
            </Button>
          </Grid>
        </Grid>

        <Alert type="error" message={error} />
      </Box>
    </Card>
  )
}
