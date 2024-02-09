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

const Colour = ({
  weight,
  children,
  color = "error.main",
}: {
  color?: string
  weight?: number
  children: React.ReactNode
}) => {
  return (
    <Box component="span" sx={{ color, fontWeight: weight }}>
      {children}
    </Box>
  )
}

const HiddenJobs = ({ jobs }: { jobs: string[] }) => {
  return (
    <Box sx={styles.hidden} component="span">
      {jobs.join(" Developer, ")} {jobs.join(" Engineer, ")}
    </Box>
  )
}

/**
 * ResumePDF Content
 */

const GitHub = "talha-ah"
const LinkedIn = "talha-ah"
const Location = "London, UK"
const Phone = "+44 794-643-4693"
const Email = "talha1392.ahmed@gmail.com"
const LocationLink = "https://maps.app.goo.gl/f9Z4nm6bcx3WsiQU8"

const Summary = (
  <>
    Engineer recognized for delivering top-tier solutions and proven expertise
    in JavaScript and Python, with a keen eye for a healthy degree of
    perfectionism. Led successfully a teams of <strong>5-6</strong> engineers in
    agile project environments, contributing to the success of projects valued
    between <strong>$5M</strong> to <strong>$7M</strong>. Adept at understanding
    and addressing complex business needs.
  </>
)

const Experiences = [
  {
    company: "Skupreme",
    role: "Software Engineer",
    location: "Miami, US (Remote)",
    duration: "January 2021 - Present",
    description: [
      <>
        Boosted the application&apos;s functionality and speed by{" "}
        <strong>30%</strong>; resulting in more than <strong>$2M</strong> value
        increase through the implementation of advanced strategies and
        techniques.{" "}
        <strong>
          Key skills: Javascript, Next.js, Node.js, Express.js, MongoDB, AWS,
          Serverless, Automation, Package management, Agile
        </strong>
      </>,
      <>
        Engineered scalable frameworks, implementing best-in-class design
        principles; achieving a <strong>30%</strong> reduction in response time
        and enhanced overall performance metrics by <strong>25%</strong>
      </>,
      <>
        Orchestrated client collaboration, facilitating demos and resolving
        challenges in real-time; resulted in a seamless project development
        process and a <strong>30%</strong> boost in client satisfaction ratings
      </>,
    ],
  },
  {
    location: "Lahore, PK",
    role: "Full Stack Developer",
    company: "Falcon IT Consulting",
    duration: "July 2020 - May 2021",
    description: [
      <>
        Spearheaded comprehensive analysis and documentation of client
        requirements, fostering clear communication which resulted in a 20%
        reduction in project iteration cycles, enhancing overall efficiency and
        client satisfaction.{" "}
        <strong>
          Key skills: JavaScript, React, React Native, Node.js, Express.js,
          MongoDB, Firebase
        </strong>
      </>,
      <>
        Managing and mentoring a team of <strong>5</strong> engineers, providing
        career advice and identifying areas for improvement.
      </>,
      <>
        Directed a <strong>$3 million</strong> project, overseeing analysis,
        planning, development, and achieved the{" "}
        <strong>
          &quot;Award of Excellence for Outstanding Accomplishments.&quot;
        </strong>
      </>,
    ],
  },
  {
    company: "Fiverr (Freelancer)",
    location: "Lahore, PK",
    role: "Full Stack Developer",
    duration: "Oct 2018 - May 2020",
    description: [
      <>
        Delivered tailored web applications for diverse industries and
        maintained an unwavering commitment to excellence, securing consistent{" "}
        <strong>5-star</strong> ratings for project deliverables.{" "}
        <strong>
          Key skills: JavaScript, React, React Native, Node.js, Express.js,
          MongoDB, Firebase, AWS, Lambda, EC2
        </strong>
      </>,
      <>
        Successfully completed over <strong>10</strong> diverse projects,
        showcasing a proven track record of project management expertise and
        timely delivery across various domains.
      </>,
    ],
  },
]

const Skills = [
  {
    title: "Programming languages",
    description:
      "JavaScript, Typescript, ES9, React, Next.js, React Native, HTML5, CSS3, Node.js, Express.js, Python, Django, FastAPI, MongoDB, PostgreSQL, Firestore. Had experience with C++, C#, PHP, MySQL, Angular, Flutter",
  },
  {
    title: "Other",
    description:
      "Docker, Jenkins, Elastic Search, Git, CI/CD, DevOps, Google Cloud, Firebase, AWS, Serverless, AppSync, Amplify, Heroku, Vercel, Netlify, Linux, EC2, Automation, Package management, Agile, Lambda, TFS, Jira,DynamoDB, GraphQL, XML, SOAP, RESTAPI, SCSS, Bootstrap, Tailwind.css, Material-ui, Styled-Components, Redux-Thunk, React-Hooks, React-Testing-Library, Jest, Enzyme, Cypress, Mocha, Chai, Sinon, Nginx, Apache, Bash, SSH",
  },
  {
    title: "Languages",
    description: "Urdu (native), Punjabi (native), English (advanced)",
  },
]

const Projects = [
  {
    title: "Prospects Trading",
    skills: "Javascript, Nodejs, Expressjs, Flutter, AWS",
    description: (
      <>
        As Backend Engineer, enabled player engagement in{" "}
        <strong>&apos;Sports Illustrated&apos;</strong> tournaments, ensuring a
        seamless event experience.
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=com.si.prospects",
  },
  {
    title: "AAB Engage App",
    skills: "Javascript, Nodejs, Expressjs, SQL, TFS",
    description: (
      <>
        As Backend Engineer, improved <strong>&apos;AAB&apos;</strong> Mobile
        app support, simplified requests, and enhanced rental accessibility for
        users.
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=com.sap.webide.x4efb5a44557f416482c43ec9805cc9b6&hl=en&gl=US",
  },
  {
    title: "Orgaplan SA",
    skills: "Javascript, React, React Native, Node.js, Express.js, MongoDB",
    description: (
      <>
        As Full-Stack Engineer, empowered construction firms for streamlined
        resource management, enhancing efficiency and ease on construction
        sites.
      </>
    ),
    link: "https://orgaplansa.com",
  },
  {
    title: "Owl Express",
    skills:
      "Javascript, ReactJs, ReactNative, AWS, DynamoDB, AppAsync, Cognito, Amplify",
    description: (
      <>
        As Full-Stack Engineer, I designed a dynamic Learning Platform,
        fostering collaboration among users. Pioneered a system for active user
        engagement, empowering them to create help requests with seamless
        responsiveness from volunteers.
      </>
    ),
    link: "https://www.owlexpress.net",
  },
]

const Educations = [
  {
    institution: "Canterbury Christ Church University",
    location: "Canterbuy, UK",
    degree: "Master of Science in Data Intelligence",
    duration: "September 2021 - November 2022",
  },
  {
    institution: "Government College University",
    location: "Lahore, PK",
    degree: "Bachelor of Science in Computer Science - Distinction",
    duration: "October 2016 - October 2020",
  },
]

export const ResumePDF = forwardRef(
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
                <Typography sx={styles.subtitle2}>{exp.duration}</Typography>
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

          {Projects.map((project, index) => (
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
                  {education.duration}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    )
  }
)

ResumePDF.displayName = "ResumePDF"
