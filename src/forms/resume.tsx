import * as React from "react"
import { useEffect, useState } from "react"

import { Box, Grid, FormLabel } from "@mui/material"

import { Input } from "@ui/Input"
import { Button } from "@ui/Button"
import { SkillType } from "@components/Portfolio/types"

interface Data {
  role: string
  summary: string
  interests: string
  skills: SkillType[]
}

interface Props {
  onClose: () => void
  onSubmit: (args: any) => void
  data: Data
}

export const UpdateResume = ({ data, onClose, onSubmit }: Readonly<Props>) => {
  const [role, setRole] = useState<string>(data.role)
  const [summary, setSummary] = useState<string>(data.summary)
  const [skills, setSkills] = useState<SkillType[]>(data.skills)
  const [interests, setInterests] = useState<string>(data.interests)

  useEffect(() => {
    setRole(data.role)
    setSkills(data.skills)
    setSummary(data.summary)
    setInterests(data.interests)
  }, [data.role, data.skills, data.summary, data.interests])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const iterator = formData.entries()

    const data = {
      skills: [] as SkillType[],
      role: formData.get("role") as string,
      summary: formData.get("summary") as string,
      interests: formData.get("interests") as string,
    }

    let nextEntry = iterator.next()

    while (!nextEntry.done) {
      const pair = nextEntry.value
      let title = pair[0]
      let list = pair[1]

      if (title.startsWith("skill-title") && list) {
        let skillsList = formData.get(
          `skill-value-${title.replace("skill-title-", "")}`
        ) as string

        data.skills.push({ title: list as string, list: skillsList })
      }

      nextEntry = iterator.next()
    }

    onSubmit(data)
    onClose()
  }

  return (
    <Box noValidate component="form" onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item>
          <FormLabel>Role</FormLabel>
        </Grid>

        <Grid item>
          <Input required fullWidth id="role" name="role" defaultValue={role} />
        </Grid>

        <Grid item>
          <FormLabel>Summary</FormLabel>
        </Grid>

        <Grid item>
          <Input
            rows={4}
            required
            fullWidth
            multiline
            id="summary"
            name="summary"
            defaultValue={summary}
          />
        </Grid>

        <Grid item>
          <FormLabel>Interests</FormLabel>
        </Grid>

        <Grid item>
          <Input
            rows={2}
            required
            fullWidth
            multiline
            id="interests"
            name="interests"
            defaultValue={interests}
          />
        </Grid>

        <Grid item>
          <FormLabel>Skills</FormLabel>
        </Grid>

        {skills.map((skill) => {
          return (
            <React.Fragment key={skill.title}>
              <Grid item xs={6}>
                <Input
                  required
                  fullWidth
                  defaultValue={skill.title}
                  id={`skill-title-${skill.title}`}
                  name={`skill-title-${skill.title}`}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  rows={4}
                  required
                  multiline
                  fullWidth
                  defaultValue={skill.list}
                  id={`skill-value-${skill.title}`}
                  name={`skill-value-${skill.title}`}
                />
              </Grid>
            </React.Fragment>
          )
        })}

        <Grid item>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit">Update</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
