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
const InitialFontSize = "20.35px"
const JobTitleFontSize = "16.5px"

const TextFontSize = "11.6875px"
const HeadingFontSize = "16.375px"

const Border = "2px solid #000000"

const styles = {
  header: {
    gap: 2,
    marginBottom: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headerRight: (theme: Theme) => ({
    width: 32,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.common.black,
    // background in the print doesn't work and it looks like a browser settings to be turned on
    // but we can only override the browser setting by this
    "color-adjust": "exact",
    "print-color-adjust": "exact",
    "-webkit-print-color-adjust": "exact",
  }),
  initials: (theme: Theme) => ({
    lineHeight: 1,
    fontWeight: 700,
    fontFamily: "inherit",
    fontSize: InitialFontSize,
    color: theme.palette.common.white,
  }),
  name: {
    mb: 1,
    lineHeight: 1,
    fontWeight: 700,
    fontFamily: "inherit",
    fontSize: NameFontSize,
  },
  jobTitle: {
    lineHeight: 1,
    fontWeight: 700,
    fontFamily: "inherit",
    display: "inline-block",
    fontSize: JobTitleFontSize,
  },
  contact: (theme: Theme) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > a": {
      display: "flex",
      color: "inherit",
      alignItems: "center",
      fontFamily: "inherit",
      textDecoration: "none",
      fontSize: TextFontSize,
      gap: theme.spacing(0.5),
      justifyContent: "center",
      fontWeight: theme.typography.fontWeightBold,

      "& > svg": {
        fontSize: JobTitleFontSize,
      },
    },
  }),
  section: (theme: Theme) => ({
    mb: theme.spacing(1),
  }),
  box: (theme: Theme) => ({
    mt: theme.spacing(0.6),
  }),
  heading: (theme: Theme) => ({
    ...styles.text,
    borderBottom: Border,
    fontSize: HeadingFontSize,
    fontWeight: theme.typography.fontWeightBold,
  }),
  title: (theme: Theme) => ({
    ...styles.text,
    fontWeight: theme.typography.fontWeightBold,
  }),
  subtitle: (theme: Theme) => ({
    ...styles.text,
    fontStyle: "italic",
    mb: theme.spacing(0.4),
  }),
  text: {
    lineHeight: 1.34,
    color: "inherit",
    fontFamily: "inherit",
    fontSize: TextFontSize,
    textDecoration: "none",
    fontWeight: 300,
  },
  list: () => ({
    margin: 0,
    padding: 0,
    listStyle: "none",
  }),
  listItem: (theme: Theme) => ({
    display: "flex",
    alignItems: "flex-start",
    "& > svg": {
      fontSize: 4,
      fontFamily: "inherit",
      marginTop: theme.spacing(0.7),
      marginRight: theme.spacing(0.4),
    },
  }),
}

interface Props {
  name: string
  role: string
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
      role = "",
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
          <Box sx={styles.headerLeft}>
            <Typography sx={styles.name}>
              {name}{" "}
              <Typography component="span" sx={styles.jobTitle}>
                {role}
              </Typography>
            </Typography>

            <Box sx={styles.contact}>
              <Link target="_blank" href={LocationLink}>
                <LocationOn /> {Location}
              </Link>
              <Link href={`tel:${Phone}`}>
                <LocalPhone /> {Phone}
              </Link>
              <Link href={`mailto:${Email}`}>
                <EmailIcon /> {Email}
              </Link>
              <Link target="_blank" href={`https://github.com/${GitHub}`}>
                <GitHubIcon /> {GitHub}
              </Link>
              <Link
                target="_blank"
                href={`https://www.linkedin.com/in/${LinkedIn}`}
              >
                <LinkedInIcon /> {LinkedIn}
              </Link>
            </Box>
          </Box>

          <Box sx={styles.headerRight}>
            <Typography sx={styles.initials}>T</Typography>
            <Typography sx={styles.initials}>A</Typography>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Summary</Typography>

              <Box sx={styles.box}>
                <ParseHTML sx={styles.text} component={Typography}>
                  {summary}
                </ParseHTML>
              </Box>
            </Box>

            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Projects</Typography>

              {projects.slice(0, 3).map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Box>
                    <Typography
                      sx={styles.title}
                      {...(item.link && {
                        target: "_blank",
                        component: Link,
                        href: item.link,
                      })}
                    >
                      {item.title} ↗
                    </Typography>
                    <Typography sx={styles.subtitle}>{item.skills}</Typography>
                  </Box>

                  <Typography sx={styles.text}>
                    {item.shortDescription}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Education</Typography>

              {educations.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.title}>
                    {item.institution} | {item.duration.start.year} -{" "}
                    {item.duration.end.year}
                  </Typography>
                  <Typography sx={styles.subtitle}>{item.degree}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Certifications</Typography>

              {Certifications.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography
                    target="_blank"
                    component={Link}
                    href={item.link}
                    sx={styles.title}
                  >
                    {item.title} ↗
                    <Typography sx={styles.subtitle}>
                      {item.organization} | {item.year}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Achievements</Typography>

              {Achievements.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.title}>{item.title}</Typography>
                  <Typography sx={styles.subtitle}>
                    {item.organizations
                      .map((org) => `${org.name} | ${org.year}`)
                      .join(" AND ")}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={styles.section}>
              <Typography sx={styles.heading}>Skills</Typography>

              {skills.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.text}>
                    {item.title ? <strong>{item.title}:&nbsp;</strong> : ""}
                    {item.list}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                Professional Experience
              </Typography>

              {experiences.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.title}>{item.role}</Typography>
                  <Typography sx={styles.subtitle}>
                    {item.company} | {item.duration.start.month.substring(0, 3)}{" "}
                    {item.duration.start.year} -{" "}
                    {item.duration.end
                      ? `${item.duration.end.month.substring(0, 3)} ${
                          item.duration.end.year
                        }`
                      : "Present"}
                  </Typography>

                  <Box component="ul" sx={styles.list}>
                    {item.description.map((desc, index) => (
                      <Box component="li" sx={styles.listItem} key={index}>
                        <FiberManualRecord fontSize="small" />
                        <ParseHTML sx={styles.text}>{desc}</ParseHTML>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
)

Resume.displayName = "Resume"
