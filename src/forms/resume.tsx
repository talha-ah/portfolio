import * as React from "react"
import { useEffect } from "react"

import { Box, Grid, FormLabel } from "@mui/material"

import { Input } from "@ui/Input"
import { Button } from "@ui/Button"
import { Skill } from "@utils/types"

export const UpdateSkills = ({
  skills,
  onClose,
  onSubmit,
}: Readonly<{
  skills: Skill[]
  onClose: () => void
  onSubmit: (args: any) => void
}>) => {
  useEffect(() => {}, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const iterator = formData.entries()

    const data = []

    let nextEntry = iterator.next()
    while (!nextEntry.done) {
      const pair = nextEntry.value
      data.push({ title: pair[0], list: pair[1] })
      nextEntry = iterator.next()
    }

    onSubmit(data)
    onClose()
  }

  return (
    <Box
      noValidate
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid item key={skill.title}>
            <FormLabel>{skill.title}</FormLabel>
            <Input
              rows={4}
              required
              multiline
              fullWidth
              id={skill.title}
              name={skill.title}
              defaultValue={skill.list}
            />
          </Grid>
        ))}

        <Grid item>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit">Update</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
