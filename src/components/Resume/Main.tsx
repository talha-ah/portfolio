import React, { forwardRef } from "react"

import { Box, Grid, Theme, Typography } from "@mui/material"

import { LinkBehaviour } from "@ui/Link"
import { ParseHTML } from "@components/ParseHTML"

import {
  SkillType,
  ProjectType,
  EducationType,
  ExperienceType,
} from "../Portfolio/types"
import {
  Name,
  Phone,
  Email,
  GitHub,
  LinkedIn,
  Location,
  LocationLink,
} from "../Portfolio/data"

const NameFontSize = "48px"
const HeadingFontSize = "18px"
const TitleFontSize = "15px"
const TextFontSize = "14px"
const MuteFontSize = "12px"

const PrimaryColor = "#1D4ED7"
const SecondaryColor = "#000000"
const MuteColor = "#63748A"

const styles = {
  root: {
    color: SecondaryColor,
  },
  name: {
    fontWeight: 700,
    color: PrimaryColor,
    fontFamily: "inherit",
    fontSize: NameFontSize,
  },
  text: {
    color: "inherit",
    lineHeight: "1.2",
    width: "fit-content",
    fontFamily: "inherit",
    fontSize: TextFontSize,
    textDecoration: "none",
  },
  textLink: () => ({
    mb: 0.4,
    ...styles.text,
    lineHeight: "1",
    display: "block",
    textDecoration: "none",
    border: "2px solid #000000",
  }),
  heading: {
    mt: 2,
    fontWeight: 700,
    lineHeight: "1.2",
    color: PrimaryColor,
    fontFamily: "inherit",
    fontSize: HeadingFontSize,
  },
  title: {
    lineHeight: 0.8,
    fontWeight: 700,
    color: "#000000",
    width: "fit-content",
    fontFamily: "inherit",
    fontSize: TitleFontSize,
  },
  titleLink: () => ({
    ...styles.title,
    whiteSpace: "nowrap",
    textDecoration: "none",
    border: "2px solid #000000",
  }),
  mute: {
    color: MuteColor,
    lineHeight: "1.2",
    fontFamily: "inherit",
    fontSize: MuteFontSize,
  },
  row: {
    gap: 0.6,
    display: "flex",
    alignItems: "center",
  },
  list: {
    padding: 0,
    margin: (theme: Theme) =>
      `${theme.spacing(1.4)} 0 ${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  section: {
    mt: 2,
  },
}

interface Props {
  summary: string
  interests: string
  skills: SkillType[]
  projects: ProjectType[]
  educations: EducationType[]
  experiences: ExperienceType[]
}

export const Resume = forwardRef(
  (
    {
      skills = [],
      summary = "",
      projects = [],
      interests = "",
      educations = [],
      experiences = [],
    }: Props,
    ref
  ) => {
    return (
      <Box ref={ref} id="resume-pdf" sx={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box>
              <Typography sx={styles.name}>{Name}</Typography>
              <ParseHTML sx={styles.text} component={Typography}>
                {summary}
              </ParseHTML>
            </Box>

            <Box>
              <Typography sx={styles.heading}>Relevant Experience</Typography>

              {experiences.slice(0, 3).map((item) => (
                <Box key={item.company} sx={styles.section}>
                  <Box sx={styles.row}>
                    <Typography sx={styles.title}>{item.role}</Typography>
                    <Typography sx={styles.mute}>·</Typography>
                    <Typography
                      to={item.link}
                      sx={styles.titleLink}
                      component={LinkBehaviour}
                    >
                      {item.company}
                    </Typography>
                    <Typography sx={styles.mute}>
                      {item.duration.start.month} {item.duration.start.year} -{" "}
                      {item.duration.end
                        ? `${item.duration.end.month} ${item.duration.end.year}`
                        : "Present"}
                    </Typography>
                  </Box>

                  <Box component="ul" sx={styles.list}>
                    {item.description.map((i, index) => (
                      <ParseHTML key={index} sx={styles.text} component="li">
                        {i}
                      </ParseHTML>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <Typography
                to={LocationLink}
                sx={styles.textLink}
                component={LinkBehaviour}
              >
                {Location}
              </Typography>
              <Typography
                to={`tel:${Phone}`}
                sx={styles.textLink}
                component={LinkBehaviour}
              >
                {Phone}
              </Typography>
              <Typography
                sx={styles.textLink}
                to={`mailto:${Email}`}
                component={LinkBehaviour}
              >
                {Email}
              </Typography>
              <Typography
                sx={styles.textLink}
                component={LinkBehaviour}
                to={`https://github.com/${GitHub}`}
              >
                github.com/{GitHub}
              </Typography>
              <Typography
                sx={styles.textLink}
                component={LinkBehaviour}
                to={`https://www.linkedin.com/in/${LinkedIn}`}
              >
                linkedin.com/in/{LinkedIn}
              </Typography>
            </Box>

            <Box>
              <Typography sx={styles.heading}>Skills</Typography>

              {skills.map((item) => (
                <Box key={item.title} sx={styles.section}>
                  <Typography sx={styles.title} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.text}>{item.list}</Typography>
                </Box>
              ))}
            </Box>

            <Box>
              <Typography sx={styles.heading}>Selected Projects</Typography>

              {projects.slice(0, 3).map((item) => (
                <Box key={item.slug} sx={styles.section}>
                  <Typography
                    to={item.title}
                    sx={styles.titleLink}
                    component={LinkBehaviour}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={styles.text}>{item.task}</Typography>
                </Box>
              ))}
            </Box>

            <Box>
              <Typography sx={styles.heading}>Education</Typography>

              {educations.map((item) => (
                <Box key={item.degree} sx={styles.section}>
                  <Typography sx={styles.title}>{item.institution}</Typography>
                  <Typography sx={styles.text}>{item.degree}</Typography>
                </Box>
              ))}
            </Box>

            <Box>
              <Typography sx={styles.heading}>Interests</Typography>

              <Box sx={styles.section}>
                <Typography sx={styles.text}>{interests}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
)

Resume.displayName = "Resume"
