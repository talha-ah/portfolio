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
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"

import { Link } from "@ui/Link"
import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"
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
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  intro: {
    gap: 4,
    display: "flex",
    minHeight: "80vh",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: (theme: Theme) => `${theme.breakpoints.values.lg}px`,
  },
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
    maxWidth: (theme: Theme) => `${theme.breakpoints.values.md}px`,
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  line: {
    height: "6px",
    width: "160px",
    marginBottom: "20px",
    backgroundColor: "primary.main",
  },
  heading: {
    fontWeight: "700",
    lineHeight: "1.111em",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  socials: {
    gap: 2,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  metrics: {
    gap: 2,
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
    mt: 2,
    paddingInlineStart: 2,
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
              <Typography variant="body1">
                {item.company} | {item.duration.start.month}{" "}
                {item.duration.start.year} -{" "}
                {item.duration.end
                  ? `${item.duration.end.month} ${item.duration.end.year}`
                  : "Present"}
              </Typography>

              <Box component="ul">
                {item.description.map((i, index) => (
                  <Box key={index} component="li">
                    {i}
                  </Box>
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
        <Box sx={styles.root}>
          <Container maxWidth="xl" id="introduction">
            <Box sx={styles.intro}>
              <Box>
                <Box sx={styles.line} />

                <Typography variant="h1" sx={styles.title}>
                  Hi, I&apos;m {Name.split(" ")[0]}.
                </Typography>

                <Typography variant="h2" sx={styles.subTitle}>
                  I build things for the web.
                </Typography>

                <Typography variant="body1" sx={styles.text}>
                  I am a Software Engineer with over {TotalExperience} years of
                  experience. I am passionate about building web applications
                  and solving problems. I have experience in Full Stack Web and
                  Mobile Development. I am proficient in JavaScript, TypeScript,
                  React, Node.js, and Python.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3" sx={styles.heading}>
                  FOLLOW ME
                </Typography>

                <Box sx={styles.socials}>
                  <Link to={`tel:${Phone}`}>
                    <PhoneIcon sx={{ fontSize: 24 }} />
                  </Link>
                  <Link to={`mailto:${Email}`}>
                    <EmailIcon sx={{ fontSize: 24 }} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to={`https://github.com/${GitHub}`}
                  >
                    <GitHubIcon sx={{ fontSize: 24 }} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    to={`https://www.linkedin.com/in/${LinkedIn}`}
                  >
                    <LinkedInIcon sx={{ fontSize: 24 }} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>

          <Section
            id="about"
            heading="About me"
            backgroundColor="background.paper"
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" sx={styles.text}>
                  Hello! My name is Talha, and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2018 when I decided to buuild a web based project for my
                  final Year in Bachelors --- turns out building a custom CMS
                  for my University taught me a lot of React and Node.js.
                </Typography>
                &nbsp;
                <Typography variant="body1" sx={styles.text}>
                  I have more than {TotalExperience} years of Professional
                  Experience and in my latest role at NTT DATA & GiffGaff, I
                  stepped up to lead a team, earning recognition for my
                  leadership and professionalism. I&apos;ve collaborated across
                  teams to optimize component usage and spearheaded impactful
                  projects.
                </Typography>
                &nbsp;
                <Typography variant="body1" sx={styles.text}>
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </Typography>
                <Grid container component="ul" sx={styles.aboutSkills}>
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                  ].map((skill) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      key={skill}
                      component="li"
                      color="text.secondary"
                    >
                      {skill}
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={12} md={6} sx={styles.metrics}>
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

          <Section id="experience" heading="Experience">
            <ExperiencesList />
          </Section>

          <Section
            id="projects"
            heading="Projects"
            backgroundColor="background.paper"
          >
            <Grid container spacing={2}>
              {Projects.map((item) => (
                <Grid key={item.title} item xs={12} md={6} lg={4}>
                  <Project project={item} />
                </Grid>
              ))}
            </Grid>
          </Section>

          <Section id="education" heading="Education">
            {Educations.map((item) => (
              <Box key={item.degree} mb={4}>
                <Typography variant="h4">{item.degree}</Typography>
                <Typography variant="h6">
                  {item.institution} | {item.location}
                </Typography>
                <Typography variant="body1">
                  {item.duration.start.month} {item.duration.start.year} -{" "}
                  {item.duration.end.month} {item.duration.end.year}
                </Typography>
              </Box>
            ))}
          </Section>

          <Section
            id="certifications"
            heading="Certifications"
            backgroundColor="background.paper"
          >
            {Certifications.map((item) => (
              <Box key={item.title} mb={4}>
                <Typography variant="h4">
                  <Link to={item.link} target="_blank" rel="noreferrer">
                    {item.title} &#8599;
                  </Link>
                </Typography>
                <Typography variant="body1">
                  {item.organization} | {item.year}
                </Typography>
              </Box>
            ))}
          </Section>

          <Section id="achievements" heading="Achievements">
            {Achievements.map((item) => (
              <Box key={item.title} mb={4}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body1">
                  {item.organizations
                    .map((org) => `${org.name} | ${org.year}`)
                    .join(" AND ")}
                </Typography>
              </Box>
            ))}
          </Section>

          <Section
            id="skills"
            heading="Skills"
            backgroundColor="background.paper"
          >
            {SkillsAll.map((skill) => (
              <Typography key={skill.title} mb={2} variant="body1">
                <strong>{skill.title}</strong> {skill.list}
              </Typography>
            ))}
          </Section>
        </Box>
      </HeaderLayout>
    </>
  )
}

export default Main
