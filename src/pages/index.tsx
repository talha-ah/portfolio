import React from "react"
import Head from "next/head"

import {
  Tab,
  Box,
  Grid,
  Tabs,
  Theme,
  Container,
  Typography,
} from "@mui/material"
import {
  ArrowOutward,
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"

import { Link } from "@ui/Link"
import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"
import { ParseHTML } from "@components/ParseHTML"
import { Project } from "@components/Portfolio/Project"
import { Section } from "@components/Portfolio/Section"

import {
  Name,
  Phone,
  Email,
  GitHub,
  Projects,
  LinkedIn,
  SkillsAll,
  Educations,
  Experiences,
  Achievements,
  Certifications,
  TotalExperience,
} from "@components/Portfolio/data"
import { useIsMobile } from "@hooks/useIsMobile"

const styles = {
  title: {
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: "1.132em",
    color: "text.primary",
    fontSize: "clamp(40px, 8vw, 80px)",
  },
  subTitle: () => ({
    ...styles.title,
    opacity: 0.6,
    color: "text.secondary",
  }),
  text: {
    fontWeight: "400",
    lineHeight: "1.667em",
    color: "text.secondary",
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  line: {
    height: "6px",
    width: "160px",
    marginBottom: "20px",
    backgroundColor: "primary.main",
  },
  socials: {
    gap: 2,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  metrics: {
    gap: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: {
      xs: "column",
      sm: "row",
      md: "column",
    },
  },
  metric: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },
  metricNumber: {
    fontWeight: "700",
    lineHeight: "1.132em",
    fontSize: "clamp(36px, 4vw, 80px)",
  },
  metricText: {
    fontWeight: "700",
    maxWidth: "120px",
    lineHeight: "1.1em",
    fontSize: "clamp(18px, 4vw, 24px)",
  },
  aboutSkills: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    paddingInlineStart: 2,

    "& li": {
      width: "50%",
    },
  },
  companies: (theme: Theme) => ({
    py: "40px",
    width: "100%",
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),
  companiesLogos: {
    gap: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: {
      xs: "center",
      md: "space-between",
    },
  },
  companiesLogo: {
    "& > img": {
      width: "150px",
      height: "auto",
    },
    "& > svg": {
      width: "150px",
      height: "auto",
    },
  },
}

const ExperiencesList = () => {
  const { isMobile } = useIsMobile()

  const [value, setValue] = React.useState(0)

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      <Tabs
        value={value}
        scrollButtons="auto"
        variant="scrollable"
        onChange={handleChange}
        aria-label="experience-tabs"
        orientation={isMobile ? "horizontal" : "vertical"}
        sx={{
          "& .MuiTabs-indicator": {
            left: 0,
          },
        }}
      >
        {Experiences.map((item, index) => (
          <Tab
            key={item.company}
            label={item.company}
            id={`vertical-tab-${index}`}
            aria-controls={`experience-tabs-${index}`}
            sx={{
              textWrap: isMobile ? "nowrap" : "wrap",
              alignItems: "start",
            }}
          />
        ))}
      </Tabs>

      <Box sx={{ width: isMobile ? "100%" : "70%", mx: "auto" }}>
        {Experiences.map((item, index) =>
          value === index ? (
            <Box
              role="tabpanel"
              key={item.company}
              hidden={value !== index}
              id={`experience-tabs-${index}`}
              aria-labelledby={`experience-tabs-${index}`}
              sx={{
                px: {
                  xs: 0,
                  md: 2,
                },
                py: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <Typography variant="h4">{item.role}</Typography>
              <Typography variant="body1" sx={styles.text}>
                {item.company} | {item.duration.start.month}{" "}
                {item.duration.start.year} -{" "}
                {item.duration.end
                  ? `${item.duration.end.month} ${item.duration.end.year}`
                  : "Present"}
              </Typography>

              <Box component="ul">
                {item.description.map((i, index) => (
                  <ParseHTML key={index} component="li" sx={styles.text}>
                    {i}
                  </ParseHTML>
                ))}
              </Box>
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  )
}

const Main = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout mb="0">
        <Section id="introduction">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={styles.line} />

              <Typography variant="h1" sx={styles.title}>
                Hi, I&apos;m {Name.split(" ")[0]}.
              </Typography>

              <Typography variant="h2" sx={styles.subTitle}>
                I build things for internet.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={styles.text}>
                I am a Software Engineer with over {TotalExperience} years of
                experience. I am passionate about building web applications and
                solving problems. I have experience in Full Stack Web and Mobile
                Development. I am proficient in JavaScript, TypeScript, React,
                Node.js, and Python.
                <br />
                <br />
                I enjoy creating things that live on the internet. My interest
                in web development started back in 2018 when I decided to build
                a web based project for my final Year in Bachelors --- turns out
                building a custom CMS for my University taught me a lot of React
                and Node.js.
                <br />
                <br />
                Here are a few technologies I&apos;ve been working with
                recently:
              </Typography>

              <Box component="ul" sx={styles.aboutSkills}>
                {[
                  "JavaScript, TypeScript",
                  "React, Next.js",
                  "Node.js",
                  "Python",
                  "PostgreSQL, MongoDB",
                  "DevOps (Docker, CI/CD)",
                ].map((skill) => (
                  <Typography
                    key={skill}
                    component="li"
                    variant="body1"
                    sx={styles.text}
                    color="text.secondary"
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>

              <Box sx={styles.socials}>
                <Link to={`tel:${Phone}`}>
                  <PhoneIcon sx={{ fontSize: 36 }} />
                </Link>
                <Link to={`mailto:${Email}`}>
                  <EmailIcon sx={{ fontSize: 36 }} />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  to={`https://github.com/${GitHub}`}
                >
                  <GitHubIcon sx={{ fontSize: 36 }} />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  to={`https://www.linkedin.com/in/${LinkedIn}`}
                >
                  <LinkedInIcon sx={{ fontSize: 36 }} />
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} sx={styles.metrics}>
              <Box sx={styles.metric}>
                <Typography variant="body1" sx={styles.metricNumber}>
                  {TotalExperience}+
                </Typography>
                <Typography variant="body1" sx={styles.metricText}>
                  Years of experience
                </Typography>
              </Box>

              <Box sx={styles.metric}>
                <Typography variant="body1" sx={styles.metricNumber}>
                  {Projects.length}+
                </Typography>
                <Typography variant="body1" sx={styles.metricText}>
                  Successful projects
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Section>

        <Box id="companies" sx={styles.companies}>
          <Container maxWidth="xl">
            <Box sx={styles.companiesLogos}>
              {Experiences.map((item) => (
                <React.Fragment key={item.company}>
                  {item.logos.map((logo, index) => (
                    <Link
                      to={logo.link}
                      target="_blank"
                      rel="noreferrer"
                      sx={styles.companiesLogo}
                      key={`${item.company}-${index}`}
                    >
                      {logo.logo}
                    </Link>
                  ))}
                </React.Fragment>
              ))}
            </Box>
          </Container>
        </Box>

        <Section
          id="experience"
          heading="Experience"
          backgroundColor="background.paper"
        >
          <ExperiencesList />
        </Section>

        <Section id="projects" heading="Projects">
          <Grid container spacing={2}>
            {Projects.map((item) => (
              <Grid key={item.title} item xs={12} md={6} lg={4}>
                <Project project={item} />
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section
          id="education"
          backgroundColor="background.paper"
          heading="Education & Certifications"
        >
          {Educations.map((item) => (
            <Box key={item.degree} mb={4}>
              <Typography variant="h4">{item.degree}</Typography>
              <Typography variant="h6" sx={styles.text}>
                {item.institution} | {item.location}
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {item.duration.start.month} {item.duration.start.year} -{" "}
                {item.duration.end.month} {item.duration.end.year}
              </Typography>
            </Box>
          ))}

          <Box sx={styles.line} />

          {Certifications.map((item) => (
            <Box key={item.title} mb={4}>
              <Typography variant="h4">
                <Link to={item.link} target="_blank" rel="noreferrer">
                  {item.title} <ArrowOutward />
                </Link>
              </Typography>
              <Typography variant="body1" sx={styles.text}>
                {item.organization} | {item.year}
              </Typography>
            </Box>
          ))}
        </Section>

        <Section id="achievements" heading="Achievements">
          {Achievements.map((item) => (
            <Box key={item.title} mb={4}>
              <Typography variant="h4">{item.title}</Typography>
              <Typography variant="body1" sx={styles.text}>
                {item.organizations
                  .map((org) => `${org.name} | ${org.year}`)
                  .join(" AND ")}
              </Typography>
            </Box>
          ))}
        </Section>

        <Section
          id="skills"
          backgroundColor="background.paper"
          heading="Experience with technologies"
        >
          {SkillsAll.map((skill) => (
            <Typography
              mb={2}
              variant="body1"
              sx={styles.text}
              key={skill.title}
            >
              <strong>{skill.title}:</strong> {skill.list}
            </Typography>
          ))}
        </Section>
      </HeaderLayout>
    </>
  )
}

export default Main
