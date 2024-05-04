import React, { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"

import { Box, Theme } from "@mui/material"
import { Print, Edit, ChangeCircle } from "@mui/icons-material"

import { Dialog } from "@ui/Dialog"
import { Button } from "@ui/Button"
import { UpdateResume } from "@forms/resume"
import {
  SkillType,
  ProjectType,
  EducationType,
  ExperienceType,
} from "@components/Portfolio/types"
import {
  Name,
  jobs,
  Skills,
  Summary,
  Projects,
  Interests,
  Educations,
  Experiences,
} from "@components/Portfolio/data"

interface Props {
  BFS?: string
}

const DefaultProps = {
  BFS: "11px",
}

export const useResume = (props?: Props) => {
  const ref = useRef<any>(null)

  const [type, setType] = useState<string>("")

  const { BFS } = { ...DefaultProps, ...props }

  const [role, setRole] = useState<string>(jobs[0])
  const [summary, setSummary] = useState<any>(Summary)
  const [skills, setSkills] = useState<SkillType[]>(Skills)
  const [interests, setInterests] = useState<any>(Interests)
  const [projects, setProjects] = useState<ProjectType[]>(Projects)
  const [educations, setEducations] = useState<EducationType[]>(Educations)
  const [experiences, setExperiences] = useState<ExperienceType[]>(Experiences)

  const FONT = type ? "Cambria, serif" : "Calibri, sans-serif"

  const styles = {
    content: {
      margin: "auto",
      padding: "44px 44px",

      maxWidth: "820px",
      minHeight: "1085px",

      borderRadius: (theme: Theme) => theme.shape.borderRadius,
      border: (theme: Theme) => `4px solid ${theme.palette.primary.main}`,

      fontSize: BFS,
      fontFamily: FONT,
      color: (theme: Theme) => theme.palette.common.black,
      backgroundColor: (theme: Theme) => theme.palette.common.white,

      "@media print": {
        "@page": {
          size: "A4 portrait",
        },

        margin: 0,
        padding: 0,

        border: 0,
        borderRadius: 0,

        top: 0,
        left: 0,
        zIndex: 9999,
        position: "absolute",
      },
    },
    buttons: {
      mb: 4,
      gap: 2,
      display: "flex",
      justifyContent: "flex-end",

      "@media print": {
        display: "none",
      },
    },
  }

  const onPrint = useReactToPrint({
    content: () => ref?.current,
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 34px 44px;
      }

      @media print {
        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
          max-height: 100%;

          color: black !important;
          font-size: ${BFS} !important;
          font-family: ${FONT} !important;
          background-color: white !important;
        }
      }
    `,
    documentTitle: `Resume - Talha Ahmad - ${role}`,
  })

  const onChangeResume = () => {
    if (type === "") setType("one-column")
    if (type === "one-column") setType("two-column")
    else if (type === "two-column") setType("")
  }

  const buttons = (
    <Box sx={styles.buttons}>
      <Dialog
        width="xl"
        title="Resume Update"
        trigger={({ toggleOpen }) => (
          <Button startIcon={<Edit />} onClick={toggleOpen}>
            Edit
          </Button>
        )}
        content={({ onClose }) => (
          <UpdateResume
            onClose={onClose}
            data={{ role, skills, summary, interests }}
            onSubmit={(value) => {
              setRole(value.role)
              setSkills(value.skills)
              setSummary(value.summary)
              setInterests(value.interests)
            }}
          />
        )}
      />

      <Button onClick={onChangeResume} startIcon={<ChangeCircle />}>
        Change Resume
      </Button>

      <Button onClick={onPrint} startIcon={<Print />}>
        Print
      </Button>
    </Box>
  )

  return {
    ref,
    type,
    styles,
    onPrint,
    buttons,
    resume: {
      role,
      skills,
      projects,
      interests,
      name: Name,
      educations,
      experiences,
      summary: role + " " + summary,
    },
  }
}
