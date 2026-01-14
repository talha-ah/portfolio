import Link from "next/link"
import React, { forwardRef } from "react"

import {
  LocalPhone,
  LocationOn,
  FiberManualRecord,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"
import { Box, Grid, Theme, Typography } from "@mui/material"

import { ParseHTML } from "@components/ParseHTML"

import {
  SkillType,
  ProjectType,
  EducationType,
  ExperienceType,
} from "../Portfolio/types"
import {
  Phone,
  Email,
  GitHub,
  LinkedIn,
  Location,
  LocationLink,
  Achievements,
  Certifications,
} from "../Portfolio/data"

const NameFontSize = "29.15px"

const TitleFontSize = "20.35px"
const SubTitleFontSize = "15px"

const TextFontSize = "12.35px"

const styles = {
  header: {
    color: "#000000",
  },
  headerName: {
    fontWeight: 800,
    textAlign: "center",
    fontFamily: "inherit",
    fontSize: NameFontSize,
  },
  headerContact: (theme: Theme) => ({
    width: "100%",
    display: "flex",
    marginBottom: 0.8,
    alignItems: "center",
    justifyContent: "space-between",
    "& > a": {
      display: "flex",
      color: "inherit",
      alignItems: "center",
      fontFamily: "inherit",
      textDecoration: "none",
      gap: theme.spacing(0.5),
      fontSize: TextFontSize,
      justifyContent: "center",
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  text: {
    lineHeight: 1.2,
    color: "inherit",
    fontFamily: "inherit",
    fontSize: TextFontSize,
    textDecoration: "none",
  },
  section: (theme: Theme) => ({
    mt: theme.spacing(0.6),
    mb: theme.spacing(0.8),
  }),
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: (theme: Theme) => ({
    ...styles.text,
    fontWeight: 800,
    mt: theme.spacing(0.8),
    fontSize: TitleFontSize,
    borderBottom: `2px solid #000000`,
  }),
  subtitle: (theme: Theme) => ({
    ...styles.text,
    lineHeight: 1,
    fontWeight: 800,
    fontSize: SubTitleFontSize,
    marginBottom: theme.spacing(0.4),
  }),
  subtitle2: () => ({
    ...styles.text,
    lineHeight: 1,
    fontStyle: "italic",
  }),
  list: () => ({
    margin: 0,
    padding: 0,
    listStyle: "none",
    fontFamily: "inherit",
  }),
  listItem: (theme: Theme) => ({
    display: "flex",
    alignItems: "flex-start",
    marginTop: theme.spacing(0.2),
    "& > svg": {
      fontSize: 4,
      fontFamily: "inherit",
      marginTop: theme.spacing(0.8),
      marginRight: theme.spacing(0.5),
    },
  }),
  pageBreak: {
    pageBreakAfter: "always",
  },
}

interface Props {
  name: string
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
      name = "",
      skills = [],
      summary = "",
      projects = [],
      educations = [],
      experiences = [],
    }: Props,
    ref
  ) => {
    return (
      <Box ref={ref} id="resume-pdf">
        <Box sx={styles.header}>
          <Typography sx={styles.headerName}>{name}</Typography>

          <Box sx={styles.headerContact}>
            <Link href={LocationLink} target="_blank" rel="noreferrer">
              <LocationOn fontSize="small" /> {Location}
            </Link>
            <Link href={`tel:${Phone}`}>
              <LocalPhone fontSize="small" /> {Phone}
            </Link>
            <Link href={`mailto:${Email}`}>
              <EmailIcon fontSize="small" /> {Email}
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${GitHub}`}
            >
              <GitHubIcon fontSize="small" /> {GitHub}
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://www.linkedin.com/in/${LinkedIn}`}
            >
              <LinkedInIcon fontSize="small" /> {LinkedIn}
            </Link>
          </Box>

          <ParseHTML sx={styles.text} component={Typography}>
            {summary}
          </ParseHTML>
        </Box>

        <Box>
          <Typography sx={styles.title}>Experience</Typography>

          {experiences.slice(0, 3).map((item, index) => (
            <Box sx={{ my: 1 }} key={index} mb={5}>
              <Typography sx={styles.subtitle} fontWeight={800}>
                {item.role} | {item.company} | {item.location} |{" "}
                {item.duration.start.month} {item.duration.start.year} -{" "}
                {item.duration.end
                  ? `${item.duration.end.month} ${item.duration.end.year}`
                  : "Present"}
              </Typography>

              <Typography sx={styles.subtitle2}>{item.skills}</Typography>

              <Box component="ul" sx={styles.list}>
                {item.description.map((i, index) => (
                  <Box component="li" sx={styles.listItem} key={index}>
                    <FiberManualRecord fontSize="small" />
                    <ParseHTML
                      key={index}
                      sx={styles.text}
                      component={Typography}
                    >
                      {i}
                    </ParseHTML>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box>
          <Typography sx={styles.title}>Skills</Typography>

          {skills.map((item, index) => (
            <Box sx={{ mt: 0.4 }} key={index}>
              <Typography sx={styles.text}>
                <strong>{item.title}:</strong>&nbsp;{item.list}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box>
          <Typography sx={styles.title}>Education</Typography>

          {educations.map((item, index) => (
            <Box sx={styles.section} key={index}>
              <Box sx={styles.spaceBetween}>
                <Typography sx={styles.subtitle}>{item.institution}</Typography>
                <Typography sx={styles.subtitle}>{item.location}</Typography>
              </Box>

              <Box sx={styles.spaceBetween}>
                <Typography sx={styles.subtitle2}>{item.degree}</Typography>
                <Typography sx={styles.subtitle2}>
                  {item.duration.start.month} {item.duration.start.year} -{" "}
                  {item.duration.end.month} {item.duration.end.year}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box>
              <Typography sx={styles.title}>Certifications</Typography>

              {Certifications.map((item, index) => (
                <Box sx={styles.section} key={index}>
                  <Typography
                    target="_blank"
                    component={Link}
                    href={item.link}
                    sx={styles.subtitle}
                  >
                    {item.title} ↗
                  </Typography>
                  <Typography sx={styles.subtitle2}>
                    {item.organization} | {item.year}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <Typography sx={styles.title}>Achievements</Typography>

              {Achievements.map((item, index) => (
                <Box sx={styles.section} key={index} mt={0}>
                  <Typography sx={styles.subtitle}>{item.title}</Typography>
                  <Typography sx={styles.subtitle2}>
                    {item.organizations
                      .map((org) => `${org.name} | ${org.year}`)
                      .join(" AND ")}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box sx={styles.pageBreak} />

        <Box>
          <Typography sx={styles.title}>Projects</Typography>

          {projects.slice(0, 9).map((item, index) => (
            <Box sx={styles.section} key={index}>
              <Box>
                <Typography
                  sx={styles.subtitle}
                  {...(item.link && {
                    component: Link,
                    href: item.link,
                    target: "_blank",
                    rel: "noreferrer",
                  })}
                >
                  {item.title} {item.link && "↗"}
                </Typography>
                <Typography sx={styles.subtitle2}>{item.skills}</Typography>
              </Box>

              <Typography sx={styles.text}>{item.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    )
  }
)

Resume.displayName = "Resume"
