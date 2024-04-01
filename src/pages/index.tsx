import React from "react"
import Head from "next/head"

import { Box, Grid, Theme, Container, Typography } from "@mui/material"
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material"

import { Link, LinkArrow } from "@ui/Link"
import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"

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
} from "@components/Resume/data"

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: "1.132em",
    color: "text.primary",
    fontSize: { xs: "34px", sm: "40px", md: "58px" },
  },
  text: {
    fontWeight: "400",
    lineHeight: "1.667em",
    color: "text.secondary",
    fontSize: { xs: "16px", md: "18px" },
  },
  intro: {
    display: "flex",
    paddingTop: {
      xs: 0,
      md: 12,
    },
    alignItems: "center",
  },
  introLine: {
    height: "6px",
    width: "160px",
    marginBottom: "20px",
    backgroundColor: "#ffffff",
  },
  introItem: (theme: Theme) => ({
    pr: 2,
    gap: 2,
    py: "50px",
    display: "flex",
    flexDirection: "column",
    borderBottom: `1px solid ${theme.palette.divider}`,
  }),
  introItemTitle: {
    fontSize: {
      xs: "16px",
      md: "18px",
    },
    fontWeight: "700",
    lineHeight: "1.111em",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  introItemLink: {
    fontWeight: "400",
    textTransform: "uppercase",
  },
  introItemSocials: {
    fontSize: {
      xs: "16px",
      md: "18px",
    },
    gap: 2,
    display: "flex",
    alignItems: "center",
  },
  section: {
    width: "100%",
    marginTop: "40px",
    p: {
      xs: "40px 20px 88px 20px",
      md: "160px 40px 88px 40px",
    },
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "700",
    paddingLeft: "20px",
    lineHeight: "1.1em",
    position: "relative",
    marginBottom: "24px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",

    "&::before": {
      top: 0,
      left: 0,
      content: '"/"',
      position: "absolute",
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },
  aboutTitle: {
    fontSize: {
      xs: "34px",
      md: "52px",
    },
    fontWeight: "700",
    marginBottom: "10px",
    lineHeight: "1.132em",
  },
  aboutMetrics: {
    gap: 2,
    marginBottom: 2,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
  },
  aboutMetric: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },
  aboutMetricNumber: {
    fontSize: {
      xs: "34px",
      md: "76px",
    },
    fontWeight: "700",
    lineHeight: "1.132em",
  },
  aboutMetricText: {
    fontSize: {
      xs: "18px",
      md: "20px",
    },
    maxWidth: {
      xs: "100%",
      md: "120px",
    },
    fontWeight: "700",
    lineHeight: "1.1em",
  },
  aboutCompanies: (theme: Theme) => ({
    display: "flex",
    marginTop: "64px",
    paddingTop: "40px",
    alignItems: "center",
    borderTop: `1px solid ${theme.palette.divider}`,
    justifyContent: {
      xs: "center",
      md: "space-between",
    },
    flexDirection: {
      xs: "column",
      md: "row",
    },
  }),
  aboutCompaniesTitle: {
    fontSize: {
      xs: "18px",
      md: "24px",
    },
    fontWeight: "700",
    lineHeight: "1.1em",
    letterSpacing: ".06em",
    textTransform: "uppercase",
  },
  aboutCompaniesLogos: {
    gap: 2,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: {
      xs: "20px",
      md: 0,
    },
  },
  aboutCompaniesLogo: {
    "& > img": {
      width: "150px",
      height: "auto",
    },
    "& > svg": {
      width: "150px",
      height: "auto",
    },
  },
  skillTitle: {
    mb: 1,
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "1.1em",
    letterSpacing: ".06em",
    textTransform: "uppercase",
  },
  skill: {
    margin: "5px",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "inline-block",
    border: "1px solid #000",
  },
}

const Section = ({
  id,
  title,
  children,
  backgroundColor,
}: {
  id?: string
  title?: string
  backgroundColor?: string
  children: React.ReactNode
}) => {
  return (
    <Box sx={{ ...styles.section, backgroundColor }} id={id}>
      <Container maxWidth="xl">
        {title && (
          <Typography variant="subtitle1" sx={styles.sectionTitle}>
            {title}
          </Typography>
        )}

        {children}
      </Container>
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
          <Container maxWidth="xl">
            <Grid container sx={styles.intro}>
              <Grid item xs={12} md={7} pr={6}>
                <Box sx={styles.introLine} />

                <Typography variant="h1" sx={styles.title}>
                  I&apos;m {Name.split(" ")[0]}, a Software Engineer
                </Typography>

                <Typography variant="body1" sx={styles.text}>
                  with over 4 years of experience. I am passionate about
                  building web applications and solving problems. I have
                  experience in both frontend and backend development.
                </Typography>
              </Grid>

              <Grid container item xs={12} md={5}>
                <Grid item xs={12} sx={styles.introItem}>
                  <Typography variant="body1" sx={styles.introItemTitle}>
                    About me
                  </Typography>
                  <Typography variant="body1" sx={styles.text}>
                    Learn more about me and my journey to becoming a software
                    engineer.
                  </Typography>
                  <LinkArrow to="#about" sx={styles.introItemLink}>
                    Learn More
                  </LinkArrow>
                </Grid>

                <Grid item xs={12} sx={styles.introItem}>
                  <Typography variant="body1" sx={styles.introItemTitle}>
                    MY WORK
                  </Typography>
                  <Typography variant="body1" sx={styles.text}>
                    Check out some of my projects and see what I&apos;ve been
                    working on.
                  </Typography>
                  <LinkArrow sx={styles.introItemLink} to="#projects">
                    Browse Portfolio
                  </LinkArrow>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={styles.introItem}
                  style={{ border: "none" }}
                >
                  <Typography variant="body1" sx={styles.introItemTitle}>
                    FOLLOW ME
                  </Typography>
                  <Box sx={styles.introItemSocials}>
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
                </Grid>
              </Grid>
            </Grid>
          </Container>

          <Section
            id="about"
            title="About me"
            backgroundColor="background.paper"
          >
            <Grid container>
              <Grid item xs={12} lg={6} pr={6}>
                <Typography variant="h1" sx={styles.aboutTitle}>
                  I&apos;ve been developing websites since 2018
                </Typography>

                <Typography variant="body1" sx={styles.text}>
                  I am a software engineer working since 2018 where I started as
                  a freelancer and then moved to a full-time job. I have over 4
                  years of professional experience. I am always looking for new
                  and exciting opportunities to work on.
                </Typography>

                {/* <LinkArrow mt={4} to="/">
                  More about me
                </LinkArrow> */}
              </Grid>

              <Grid item xs={12} lg={6}>
                <Box sx={styles.aboutMetrics}>
                  <Box sx={styles.aboutMetric}>
                    <Typography variant="body1" sx={styles.aboutMetricNumber}>
                      4+
                    </Typography>
                    <Typography variant="body1" sx={styles.aboutMetricText}>
                      Years of experience
                    </Typography>
                  </Box>
                  <Box sx={styles.aboutMetric}>
                    <Typography variant="body1" sx={styles.aboutMetricNumber}>
                      15+
                    </Typography>
                    <Typography variant="body1" sx={styles.aboutMetricText}>
                      Successful projects
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={styles.text}>
                  I have worked with a variety of companies and clients. I have
                  experience in both frontend and backend development. I have
                  worked on a variety of projects ranging from small websites to
                  large web applications.
                </Typography>
              </Grid>

              <Grid item xs={12} sx={styles.aboutCompanies}>
                <Typography variant="body1" sx={styles.aboutCompaniesTitle}>
                  Previously worked with
                </Typography>
                <Box sx={styles.aboutCompaniesLogos}>
                  {Experiences.map((item) => (
                    <React.Fragment key={item.company}>
                      {item.logos.map((logo, index) => (
                        <Box
                          sx={styles.aboutCompaniesLogo}
                          key={`${item.company}-${index}`}
                        >
                          {logo}
                        </Box>
                      ))}
                    </React.Fragment>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Section>

          <Section id="skills" title="Skills">
            {SkillsAll.map((skill) => (
              <Box key={skill.title} mb={4}>
                <Typography variant="h3" sx={styles.skillTitle}>
                  {skill.title}
                </Typography>
                <Box>
                  {skill.list.split(",").map((item) => (
                    <Box key={item} sx={styles.skill}>
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Section>

          <Section
            id="education"
            title="Education"
            backgroundColor="background.paper"
          >
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

          <Section id="experience" title="Experience">
            {Experiences.map((item) => (
              <Box key={item.company} mb={4}>
                <Typography variant="h4">{item.role}</Typography>
                <Typography variant="body1">
                  {item.company} | {item.location} | {item.duration.start.month}{" "}
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
            ))}
          </Section>

          <Section
            id="projects"
            title="Projects"
            backgroundColor="background.paper"
          >
            {Projects.map((item) => (
              <Box key={item.title} mb={4}>
                <Link variant="h4" to={item.link}>
                  {item.title} &#8599;
                </Link>
                <Typography variant="body1" sx={styles.text}>
                  {item.skills}
                </Typography>
                <Typography variant="body1">{item.experience}</Typography>
              </Box>
            ))}
          </Section>

          <Section id="certifications" title="Certifications">
            {Certifications.map((item) => (
              <Box key={item.title} mb={4}>
                <Link variant="h4" to={item.link}>
                  {item.title} &#8599;
                </Link>
                <Typography variant="body1">
                  {item.organization} | {item.year}
                </Typography>
              </Box>
            ))}
          </Section>

          <Section
            id="achievements"
            title="Achievements"
            backgroundColor="background.paper"
          >
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
        </Box>
      </HeaderLayout>
    </>
  )
}

export default Main
