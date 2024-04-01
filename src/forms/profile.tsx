import { useEffect, useState } from "react"

import { Box, Grid } from "@mui/material"

import { Input } from "@ui/Input"
import { Button } from "@ui/Button"
import { useApi } from "@hooks/useApi"
import { ENDPOINTS } from "@utils/constants"
import { useAppContext, AuthTypes } from "@contexts/index"

export function UpdateProfile() {
  const API = useApi()
  const { state, dispatch } = useAppContext()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [email, setEmail] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [phone, setPhone] = useState<string | undefined>("")
  const [lastName, setLastName] = useState<string | undefined>("")

  useEffect(() => {
    setEmail(state?.auth?.user?.email ?? "")
    setPhone(state?.auth?.user?.phone ?? "")
    setLastName(state?.auth?.user?.lastName ?? "")
    setFirstName(state?.auth?.user?.firstName ?? "")
  }, [state?.auth?.user])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      setError(null)
      setLoading(true)

      if (!firstName || !email) {
        setError("Please fill the required fields")
        return
      }

      const body = {
        email: email,
        phone: phone,
        lastName: lastName,
        firstName: firstName,
      }

      const response = await API({
        method: "PUT",
        url: ENDPOINTS.profile,
        body: JSON.stringify(body),
        message: "Profile updated successfully",
      })

      dispatch({
        type: AuthTypes.SET_USER,
        payload: { user: response?.data },
      })
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        noValidate
        component="form"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Input
              required
              fullWidth
              id="firstName"
              name="firstName"
              value={firstName}
              label="First Name"
              autoComplete="given-name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <Input
              fullWidth
              id="lastName"
              name="lastName"
              value={lastName}
              label="Last Name"
              autoComplete="family-name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required
              fullWidth
              id="email"
              name="email"
              type="email"
              value={email}
              autoComplete="email"
              label="Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={phone}
              autoComplete="phone"
              onChange={(event) => setPhone(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                gap: 2,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" loading={loading}>
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>

        {error}
      </Box>
    </Box>
  )
}

export function UpdatePassword() {
  const API = useApi()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [password, setPassword] = useState<string>("")
  const [oldPassword, setOldPassword] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      setError(null)
      setLoading(true)

      if (!password || !oldPassword) {
        setError("Please fill all fields")
        return
      }

      const body = {
        old_password: oldPassword,
        password: password,
      }

      await API({
        method: "PATCH",
        url: ENDPOINTS.profile,
        body: JSON.stringify(body),
        message: "Password updated successfully",
      })

      setPassword("")
      setOldPassword("")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        noValidate
        component="form"
        sx={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Input
              required
              fullWidth
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={oldPassword}
              label="Current Password"
              autoComplete="current-password"
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </Grid>
          <Grid item sm={6}>
            <Input
              required
              fullWidth
              id="password"
              type="password"
              name="password"
              value={password}
              label="New Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Grid item sm={12}>
            <Box
              sx={{
                gap: 2,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" loading={loading}>
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>

        {error}
      </Box>
    </Box>
  )
}
