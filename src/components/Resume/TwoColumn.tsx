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
import { Box, Grid, Theme, Divider, Typography } from "@mui/material"

import { Skill } from "@utils/types"
import {
  jobs,
  Email,
  Phone,
  GitHub,
  Colour,
  Summary,
  LinkedIn,
  Location,
  Projects,
  Educations,
  Experiences,
  LocationLink,
  Acheivements,
  Certifications,
} from "./data"

const NameFontSize = "29.15px"
const InitialFontSize = "20.35px"
const JobTitleFontSize = "16.5px"

const TextFontSize = "11.6875px"
const HeadingFontSize = "16.375px"

const styles = {
  header: {
    gap: 2,
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
    mb: 0.6,
    lineHeight: 1,
    fontWeight: 700,
    fontFamily: "inherit",
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
  divider: (width?: number) => ({
    mb: width ? 0.6 : 1,
    mt: width ? 0.6 : 1.2,
    border: 0,
    borderBottom: `${width ?? 3}px solid #e0e0e0`,
  }),
}

export const Resume = forwardRef(
  ({ index, skills }: { index: number; skills: Skill[] }, ref) => {
    return (
      <Box ref={ref} id="resume-pdf">
        <Box sx={styles.header}>
          {/* Introduction */}
          <Box sx={styles.headerLeft}>
            <Typography sx={styles.name}>Talha Ahmad</Typography>

            <Typography sx={styles.jobTitle}>{jobs[index]} Engineer</Typography>

            <Box sx={styles.contact}>
              <Link href={LocationLink}>
                <LocationOn /> {Location}
              </Link>
              <Link href={`tel:${Phone}`}>
                <LocalPhone /> {Phone}
              </Link>
              <Link href={`mailto:${Email}`}>
                <EmailIcon /> {Email}
              </Link>
              <Link href={`https://github.com/${GitHub}`}>
                <GitHubIcon /> {GitHub}
              </Link>
              <Link href={`https://www.linkedin.com/in/${LinkedIn}`}>
                <LinkedInIcon /> {LinkedIn}
              </Link>
            </Box>
          </Box>

          {/* Initials */}
          <Box sx={styles.headerRight}>
            <Typography sx={styles.initials}>T</Typography>
            <Typography sx={styles.initials}>A</Typography>
          </Box>
        </Box>

        <Divider sx={() => styles.divider()} />

        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={6}>
            {/* Summary */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Su</Colour>mmary
              </Typography>

              <Box sx={styles.box}>
                <Typography sx={styles.text}>
                  {jobs[index]} {Summary}
                </Typography>
              </Box>
            </Box>

            <Divider sx={() => styles.divider()} />

            {/* Experience */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Pr</Colour>ofessional Experience
              </Typography>

              {Experiences.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Box>
                    <Typography sx={styles.title}>{item.role}</Typography>
                    <Typography sx={styles.subtitle}>
                      {item.duration.start.month.substring(0, 3)}{" "}
                      {item.duration.start.year} -{" "}
                      {item.duration.end
                        ? `${item.duration.end.month.substring(0, 3)} ${
                            item.duration.end.year
                          }`
                        : "Present"}{" "}
                      | {item.company}
                    </Typography>
                  </Box>

                  <Box component="ul" sx={styles.list}>
                    {item.description.map((desc, index) => (
                      <Box component="li" sx={styles.listItem} key={index}>
                        <FiberManualRecord fontSize="small" />
                        <Typography sx={styles.text}>{desc}</Typography>
                      </Box>
                    ))}
                  </Box>

                  {index !== Experiences.length - 1 && (
                    <Divider sx={() => styles.divider(1)} />
                  )}
                </Box>
              ))}
            </Box>

            <Divider sx={() => styles.divider()} />

            {/* Education */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Ed</Colour>ucation
              </Typography>

              {Educations.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.title}>
                    {item.institution} | {item.duration.start.year} -{" "}
                    {item.duration.end.year}
                  </Typography>
                  <Typography sx={styles.subtitle}>{item.degree}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={6}>
            {/* Projects */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Pr</Colour>ojects
              </Typography>

              {Projects.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Box>
                    <Typography
                      target="_blank"
                      component={Link}
                      sx={styles.title}
                      href={item.link}
                    >
                      {item.title} ↗
                    </Typography>
                    <Typography sx={styles.subtitle}>{item.skills}</Typography>
                  </Box>

                  <Typography sx={styles.text}>{item.description}</Typography>

                  {index !== Projects.length - 1 && (
                    <Divider sx={() => styles.divider(1)} />
                  )}
                </Box>
              ))}
            </Box>

            <Divider sx={() => styles.divider()} />

            {/* Skills */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Sk</Colour>ills
              </Typography>

              {skills.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography sx={styles.text}>
                    {item.title ? <strong>{item.title}:&nbsp;</strong> : ""}
                    {item.list}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={() => styles.divider()} />

            {/* Certifications */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Ce</Colour>rtifications
              </Typography>

              {Certifications.map((item, index) => (
                <Box sx={styles.box} key={index}>
                  <Typography
                    sx={styles.title}
                    target="_blank"
                    component={Link}
                    href={item.link}
                  >
                    {item.title} ↗
                    <Typography sx={styles.subtitle}>
                      {item.organization} | {item.year}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>

            <Divider sx={() => styles.divider()} />

            {/* Achievements */}
            <Box sx={styles.section}>
              <Typography sx={styles.heading}>
                <Colour>Ac</Colour>hievements
              </Typography>

              {Acheivements.map((item, index) => (
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
          </Grid>
        </Grid>
      </Box>
    )
  }
)

Resume.displayName = "Resume"
