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
import { Box, Theme, Typography } from "@mui/material"

import {
  Phone,
  Email,
  GitHub,
  Skills,
  Colour,
  Summary,
  LinkedIn,
  Location,
  Projects,
  Educations,
  HiddenJobs,
  Experiences,
  LocationLink,
} from "./data"

const HeaderFontSize = "11.68px"
const HeaderNameFontSize = "29.15px"

const TitleFontSize = "20.35px"
const SubTitleFontSize = "13.75px"

const TextFontSize = "12.375px"

const styles = {
  header: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerName: (theme: Theme) => ({
    fontFamily: "inherit",
    fontSize: HeaderNameFontSize,
    fontWeight: theme.typography.fontWeightBold,
  }),
  headerNameThin: (theme: Theme) => ({
    fontWeight: theme.typography.fontWeightLight,
  }),
  headerSummary: {
    maxWidth: "90%",
    marginBottom: 0.8,
    fontStyle: "italic",
    fontFamily: "inherit",
    fontSize: HeaderFontSize,
    position: "relative", // for hidden jobs
  },
  headerContact: (theme: Theme) => ({
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
      gap: theme.spacing(0.5),
      fontSize: HeaderFontSize,
      justifyContent: "center",
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  paddingLeft: {
    pl: (theme: Theme) => theme.spacing(2),
  },
  section: (theme: Theme) => ({
    ...styles.paddingLeft,
    mt: theme.spacing(0.4),
    mb: theme.spacing(0.8),
  }),
  flexSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: (theme: Theme) => ({
    mt: theme.spacing(0.8),
    fontFamily: "inherit",
    fontSize: TitleFontSize,
    fontWeight: theme.typography.fontWeightBold,
  }),
  subtitle: (theme: Theme) => ({
    lineHeight: 1,
    color: "inherit",
    fontFamily: "inherit",
    textDecoration: "none",
    fontSize: SubTitleFontSize,
    marginBottom: theme.spacing(0.4),
    fontWeight: theme.typography.fontWeightBold,
  }),
  subtitle2: (theme: Theme) => ({
    lineHeight: 1,
    fontStyle: "italic",
    fontFamily: "inherit",
    fontSize: TextFontSize,
    fontWeight: theme.typography.fontWeightRegular,
  }),
  list: () => ({
    margin: 0,
    padding: 0,
    listStyle: "none",
    fontFamily: "inherit",
    ...styles.paddingLeft,
  }),
  listItem: (theme: Theme) => ({
    display: "flex",
    alignItems: "flex-start",
    marginTop: theme.spacing(0.2),
    "& > svg": {
      fontSize: 7,
      fontFamily: "inherit",
      marginTop: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  }),
  listItemText: {
    lineHeight: 1.3,
    color: "inherit",
    fontFamily: "inherit",
    fontSize: TextFontSize,
  },
  hidden: {
    left: "0",
    right: "0",
    position: "absolute",
    visibility: "hidden",
  },
}

export const ResumeSingleColumn = forwardRef(
  ({ jobs, jobIndex }: { jobs: string[]; jobIndex: number }, ref) => {
    return (
      <Box ref={ref} id="resume-pdf">
        {/* Introduction */}
        <Box sx={styles.header}>
          {/* Name */}
          <Typography sx={styles.headerName}>
            <Box component="span" sx={styles.headerNameThin}>
              Talha
            </Box>{" "}
            Ahmad
          </Typography>

          {/* Summary */}
          <Typography sx={styles.headerSummary}>
            {jobs[jobIndex]} <HiddenJobs jobs={jobs} />
            {Summary}
          </Typography>

          {/* Contacts */}
          <Box sx={styles.headerContact}>
            <Link href={LocationLink}>
              <LocationOn fontSize="small" /> {Location}
            </Link>
            <Link href={`tel:${Phone}`}>
              <LocalPhone fontSize="small" /> {Phone}
            </Link>
            <Link href={`mailto:${Email}`}>
              <EmailIcon fontSize="small" /> {Email}
            </Link>
            <Link href={`https://github.com/${GitHub}`}>
              <GitHubIcon fontSize="small" /> {GitHub}
            </Link>
            <Link href={`https://www.linkedin.com/in/${LinkedIn}`}>
              <LinkedInIcon fontSize="small" /> {LinkedIn}
            </Link>
          </Box>
        </Box>

        {/* Experiences */}
        <Box>
          <Typography sx={styles.title}>
            <Colour>Pr</Colour>ofessional Experience
          </Typography>

          {Experiences.map((exp, index) => (
            <Box sx={styles.section} key={index}>
              <Box sx={styles.flexSpaceBetween}>
                <Typography sx={styles.subtitle}>
                  <Colour color="primary.main" weight={800}>
                    {exp.company}
                  </Colour>
                </Typography>
                <Typography sx={styles.subtitle}>{exp.location}</Typography>
              </Box>

              <Box sx={styles.flexSpaceBetween}>
                <Typography sx={styles.subtitle2}>{exp.role}</Typography>
                <Typography sx={styles.subtitle2}>
                  {exp.duration.start.month} {exp.duration.start.year} -{" "}
                  {exp.duration.end
                    ? `${exp.duration.end.month} ${exp.duration.end.year}`
                    : "Present"}
                </Typography>
              </Box>

              <Box component="ul" sx={styles.list}>
                {exp.description.map((desc, index) => (
                  <Box component="li" sx={styles.listItem} key={index}>
                    <FiberManualRecord fontSize="small" />
                    <Typography sx={styles.listItemText}>{desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Skills */}
        <Box>
          <Typography sx={styles.title}>
            <Colour>Sk</Colour>ills
          </Typography>

          {Skills.map((skill, index) => (
            <Box sx={styles.section} key={index}>
              <Typography sx={styles.listItemText}>
                <strong>{skill.title}:</strong>&nbsp;{skill.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Projects */}
        <Box>
          <Typography sx={styles.title}>
            <Colour>Pr</Colour>ojects
          </Typography>

          {Projects.slice(1, Projects.length - 1).map((project, index) => (
            <Box sx={styles.section} key={index}>
              <Box sx={styles.flexSpaceBetween}>
                <Typography
                  component={Link}
                  sx={styles.subtitle}
                  href={project.link}
                >
                  {project.title} ↗
                </Typography>
                <Typography sx={styles.subtitle}>{project.skills}</Typography>
              </Box>

              <Box sx={styles.flexSpaceBetween}>
                <Typography sx={styles.subtitle2}>
                  {project.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box>
          <Typography sx={styles.title}>
            <Colour>Ed</Colour>ucation
          </Typography>

          {Educations.map((education, index) => (
            <Box sx={styles.section} key={index}>
              <Box sx={styles.flexSpaceBetween}>
                <Typography sx={styles.subtitle}>
                  {education.institution}
                </Typography>
                <Typography sx={styles.subtitle}>
                  {education.location}
                </Typography>
              </Box>

              <Box sx={styles.flexSpaceBetween}>
                <Typography sx={styles.subtitle2}>
                  {education.degree}
                </Typography>
                <Typography sx={styles.subtitle2}>
                  {education.duration.start.month}{" "}
                  {education.duration.start.year} -{" "}
                  {education.duration.end.month} {education.duration.end.year}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    )
  }
)

ResumeSingleColumn.displayName = "ResumeSingleColumn"
