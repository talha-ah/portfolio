import Head from "next/head"
import Link from "next/link"
import { useReactToPrint } from "react-to-print"
import React, { forwardRef, useRef, useState } from "react"

import { Box, Theme, Typography, ButtonGroup } from "@mui/material"
import {
  Print,
  Email,
  GitHub,
  LinkedIn,
  LocalPhone,
  LocationOn,
  NavigateNext,
  NavigateBefore,
  FiberManualRecord,
} from "@mui/icons-material"

import { Button } from "@ui/Button"
import { HeaderLayout } from "@layouts/index"

const BASE_FONT_SIZE = "11px"

const HeaderFontSize = "11.68px"
const HeaderNameFontSize = "29.15px"

const TitleFontSize = "20.35px"
const SubTitleFontSize = "13.75px"

const TextFontSize = "12.375px"

const jobTitles = [
  "Software",
  "Full stack",
  "Backend",
  "Frontend",
  "Nodejs",
  "Python",
  "Javascript",
]

const styles = {
  root: (theme: Theme) => ({
    margin: "auto",
    padding: "44px",

    maxWidth: "792px",
    maxHeight: "1122.24px",

    border: "4px solid rgb(74, 85, 104)",
    borderRadius: "1rem",

    overflow: "hidden",

    fontSize: BASE_FONT_SIZE,
    fontFamily: "Lato, Roboto, sans-serif",
    color:
      theme.palette.mode === "dark"
        ? theme.palette.common.white
        : theme.palette.common.black,

    "@media print": {
      "@page": {
        size: "A4 portrait",
      },

      top: 0,
      left: 0,
      zIndex: 9999,
      position: "absolute",

      margin: 0,
      padding: 0,

      border: 0,
      borderRadius: 0,

      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    },
  }),
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
  flexSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paddingLeft: {
    pl: (theme: Theme) => theme.spacing(2),
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
  job: (theme: Theme) => ({
    ...styles.paddingLeft,
    mb: theme.spacing(0.8),
  }),
  project: (theme: Theme) => ({
    pl: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }),
  buttons: {
    mb: 4,
    gap: 2,
    display: "flex",
    justifyContent: "flex-end",
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

const HiddenJobs = () => {
  return (
    <Box sx={styles.hidden} component="span">
      {jobTitles.join(" Developer, ")} {jobTitles.join(" Engineer, ")}
    </Box>
  )
}

const ResumePDF = forwardRef(({ title }: { title: string }, ref) => {
  return (
    <Box sx={styles.root} ref={ref} id="resume-pdf">
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
          {title} <HiddenJobs />
          Engineer recognized for delivering top-tier solutions and proven
          expertise in JavaScript and Python, with a keen eye for a healthy
          degree of perfectionism. Led successfully a teams of 5-6 engineers in
          agile project environments, contributing to the success of projects
          valued between $5M to $7M. Adept at understanding and addressing
          complex business needs.
        </Typography>

        {/* Contacts */}
        <Box sx={styles.headerContact}>
          <Link href="https://maps.app.goo.gl/f9Z4nm6bcx3WsiQU8">
            <LocationOn fontSize="small" /> London, UK
          </Link>
          <Link href="tel:+447946434693">
            <LocalPhone fontSize="small" /> +44 794-643-4693
          </Link>
          <Link href="mailto:talha1392.ahmed@gmail.com">
            <Email fontSize="small" /> talha1392.ahmed@gmail.com
          </Link>
          <Link href="https://github.com/talha-ah">
            <GitHub fontSize="small" /> talha-ah
          </Link>
          <Link href="https://www.linkedin.com/in/talha-ah">
            <LinkedIn fontSize="small" /> talha-ah
          </Link>
        </Box>
      </Box>

      {/* Experiences */}
      <Box>
        <Typography sx={styles.title}>
          <Colour>Pr</Colour>ofessional Experience
        </Typography>

        {/* Job */}
        <Box sx={styles.job}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle}>
              <Colour color="primary.main" weight={800}>
                Skupreme
              </Colour>
            </Typography>
            <Typography sx={styles.subtitle}>Miami, US (Remote)</Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>Software Engineer</Typography>
            <Typography sx={styles.subtitle2}>
              January 2021 - Present
            </Typography>
          </Box>

          <Box component="ul" sx={styles.list}>
            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Boosted the application&apos;s functionality and speed by{" "}
                <strong>30%</strong>; resulting in more than{" "}
                <strong>$2M</strong> value increase through the implementation
                of advanced strategies and techniques.{" "}
                <strong>
                  Key skills: Javascript, Next.js, Node.js, Express.js, MongoDB,
                  AWS, Serverless, Automation, Package management, Agile
                </strong>
              </Typography>
            </Box>

            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Engineered scalable frameworks, implementing best-in-class
                design principles; achieving a <strong>30%</strong> reduction in
                response time and enhanced overall performance metrics by{" "}
                <strong>25%</strong>
              </Typography>
            </Box>

            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Orchestrated client collaboration, facilitating demos and
                resolving challenges in real-time; resulted in a seamless
                project development process and a <strong>30%</strong> boost in
                client satisfaction ratings.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Job */}
        <Box sx={styles.job}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle}>
              <Colour color="primary.main" weight={800}>
                Falcon IT Consulting
              </Colour>
            </Typography>
            <Typography sx={styles.subtitle}>Lahore, PK</Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>Full Stack Developer</Typography>
            <Typography sx={styles.subtitle2}>July 2020 - May 2021</Typography>
          </Box>

          <Box sx={styles.list}>
            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Spearheaded comprehensive analysis and documentation of client
                requirements, fostering clear communication which resulted in a
                20% reduction in project iteration cycles, enhancing overall
                efficiency and client satisfaction.{" "}
                <strong>
                  Key skills: JavaScript, React, React Native, Node.js,
                  Express.js, MongoDB, Firebase
                </strong>
              </Typography>
            </Box>

            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Managing and mentoring a team of <strong>5</strong> engineers,
                providing career advice and identifying areas for improvement.
              </Typography>
            </Box>

            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Directed a <strong>$3 million</strong> project, overseeing
                analysis, planning, development, and achieved the{" "}
                <strong>
                  &quot;Award of Excellence for Outstanding
                  Accomplishments.&quot;
                </strong>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Job */}
        <Box sx={styles.job}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle}>
              <Colour color="primary.main" weight={800}>
                Fiverr
              </Colour>{" "}
              (Freelancer)
            </Typography>
            <Typography sx={styles.subtitle}>Lahore, PK</Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>Full Stack Developer</Typography>
            <Typography sx={styles.subtitle2}>Oct 2018 - May 2020</Typography>
          </Box>

          <Box sx={styles.list}>
            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Delivered tailored web applications for diverse industries and
                maintained an unwavering commitment to excellence, securing
                consistent <strong>5-star</strong> ratings for project
                deliverables.{" "}
                <strong>
                  Key skills: JavaScript, React, React Native, Node.js,
                  Express.js, MongoDB, Firebase, AWS, Lambda, EC2
                </strong>
              </Typography>
            </Box>

            <Box component="li" sx={styles.listItem}>
              <FiberManualRecord fontSize="small" />
              <Typography sx={styles.listItemText}>
                Successfully completed over <strong>10</strong> diverse
                projects, showcasing a proven track record of project management
                expertise and timely delivery across various domains.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Skills */}
      <Box>
        <Typography sx={styles.title}>
          <Colour>Sk</Colour>ills
        </Typography>

        {/* Project */}
        <Box sx={styles.project}>
          <Typography sx={styles.listItemText}>
            <strong>Programming languages:</strong>&nbsp;JavaScript, Typescript,
            ES9, React, Next.js, React Native, HTML5, CSS3, Node.js, Express.js,
            Python, Django, FastAPI, MongoDB, PostgreSQL, Firestore. Had
            experience with C++, C#, PHP, MySQL, Angular, Flutter
          </Typography>
        </Box>

        <Box sx={styles.project}>
          <Typography sx={styles.listItemText}>
            <strong>Other:</strong>&nbsp;Docker, Jenkins, Elastic Search, Git,
            CI/CD, DevOps, Google Cloud, Firebase, AWS, Serverless, AppSync,
            Amplify, Heroku, Vercel, Netlify, Linux, EC2, Automation, Package
            management, Agile, Lambda, TFS, Jira,DynamoDB, GraphQL, XML, SOAP,
            RESTAPI, SCSS, Bootstrap, Tailwind.css, Material-ui,
            Styled-Components, Redux-Thunk, React-Hooks, React-Testing-Library,
            Jest, Enzyme, Cypress, Mocha, Chai, Sinon, Nginx, Apache, Bash, SSH
          </Typography>
        </Box>

        <Box sx={styles.project}>
          <Typography sx={styles.listItemText}>
            <strong>Languages:</strong>&nbsp;Urdu (native), Punjabi (native),
            English (advanced)
          </Typography>
        </Box>
      </Box>

      {/* Projects */}
      <Box>
        <Typography sx={styles.title}>
          <Colour>Pr</Colour>ojects
        </Typography>

        {/* Project */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography
              component={Link}
              sx={styles.subtitle}
              href="https://play.google.com/store/apps/details?id=com.si.prospects"
            >
              Prospects Trading ↗
            </Typography>
            <Typography sx={styles.subtitle}>
              Javascript, Nodejs, Expressjs, Flutter, AWS
            </Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              As Backend Engineer, enabled player engagement in{" "}
              <strong>&apos;Sports Illustrated&apos;</strong> tournaments,
              ensuring a seamless event experience.
            </Typography>
          </Box>
        </Box>

        {/* Project */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography
              component={Link}
              sx={styles.subtitle}
              href="https://play.google.com/store/apps/details?id=com.sap.webide.x4efb5a44557f416482c43ec9805cc9b6&hl=en&gl=US"
            >
              AAB Engage App ↗
            </Typography>
            <Typography sx={styles.subtitle}>
              Javascript, Nodejs, Expressjs, SQL, TFS
            </Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              As Backend Engineer, improved <strong>&apos;AAB&apos;</strong>{" "}
              Mobile app support, simplified requests, and enhanced rental
              accessibility for users.
            </Typography>
          </Box>
        </Box>

        {/* Project */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography
              component={Link}
              sx={styles.subtitle}
              href="https://orgaplansa.com"
            >
              Orgaplan SA ↗
            </Typography>
            <Typography sx={styles.subtitle}>
              Javascript, React, React Native, Node.js, Express.js, MongoDB
            </Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              As Full-Stack Engineer, empowered construction firms for
              streamlined resource management, enhancing efficiency and ease on
              construction sites.
            </Typography>
          </Box>
        </Box>

        {/* Project */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography
              component={Link}
              sx={styles.subtitle}
              href="https://www.owlexpress.net"
            >
              Owl Express ↗
            </Typography>
            <Typography sx={styles.subtitle}>
              Javascript, ReactJs, ReactNative, AWS, DynamoDB, AppAsync,
              Cognito, Amplify
            </Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              As Full-Stack Engineer, empowered construction firms for
              streamlined resource management, enhancing efficiency and ease on
              construction sites.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Education */}
      <Box>
        <Typography sx={styles.title}>
          <Colour>Ed</Colour>ucation
        </Typography>

        {/* Education 1 */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle}>
              Canterbury Christ Church University
            </Typography>
            <Typography sx={styles.subtitle}>Canterbuy, UK</Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              Master of Science in Data Intelligence
            </Typography>
            <Typography sx={styles.subtitle2}>
              September 2021 - November 2022
            </Typography>
          </Box>
        </Box>

        {/* Education 2 */}
        <Box sx={styles.project}>
          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle}>
              Government College University
            </Typography>
            <Typography sx={styles.subtitle}>Lahore, PK</Typography>
          </Box>

          <Box sx={styles.flexSpaceBetween}>
            <Typography sx={styles.subtitle2}>
              Bachelor of Science in Computer Science - Distinction
            </Typography>
            <Typography sx={styles.subtitle2}>
              October 2016 - October 2020
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
})

ResumePDF.displayName = "ResumePDF"

const Resume = () => {
  const [index, setIndex] = useState(0)

  const componentRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 34px 44px;
      }
    `,
    onAfterPrint: () => {
      setIndex((prev) => {
        if (prev === jobTitles.length - 1) return 0

        return prev + 1
      })
    },
  })

  const onPrevious = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? jobTitles.length - 1 : (prev - 1) % jobTitles.length
    )
  }

  const onNext = () => {
    setIndex((prev) => (prev + 1) % jobTitles.length)
  }

  return (
    <>
      <Head>
        <title>Talha Ahmad - {jobTitles[index]} Engineer</title>

        <meta name="author" content="Talha Ahmad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Resume - Talha Ahmad - ${jobTitles[index]} Engineer`}
        />
        <meta
          name="keywords"
          content={`resume,cv,Talha Ahmad,${jobTitles.join(
            " Developer, "
          )}, ${jobTitles.join(" Engineer, ")}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout>
        <Box sx={styles.buttons}>
          <ButtonGroup size="small" aria-label="print-actions">
            <Button onClick={onPrevious} startIcon={<NavigateBefore />}>
              Previous
            </Button>
            <Button onClick={onNext} endIcon={<NavigateNext />}>
              Next
            </Button>
          </ButtonGroup>

          <Button onClick={handlePrint} startIcon={<Print />}>
            Print
          </Button>
        </Box>

        <ResumePDF ref={componentRef} title={jobTitles[index]} />
      </HeaderLayout>
    </>
  )
}

export default Resume
