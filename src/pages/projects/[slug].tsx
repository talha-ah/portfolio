import React from "react"
import Head from "next/head"

import { Box, Typography } from "@mui/material"
import { InsertLink } from "@mui/icons-material"

import { Link } from "@ui/Link"
import { Button } from "@ui/Button"
import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"
import { Projects } from "@components/Portfolio/data"
import { Section } from "@components/Portfolio/Section"
import { ProjectType } from "@components/Portfolio/types"

const styles = {
  name: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "24px",
  },
  text: {
    marginBottom: "24px",
    lineHeight: "1.667em",
    color: "text.secondary",
    fontSize: "clamp(14px, 4vw, 20px)",
  },
  icons: {
    gap: 4,
    display: "flex",
    fontSize: "24px",
    color: "text.secondary",
    justifyContent: "center",
  },
}

const Page = ({ project }: { project: ProjectType }) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout mb="0">
        <Section>
          <Typography variant="h1" sx={styles.name}>
            {project.title}
          </Typography>

          <Box sx={styles.text}>
            <strong>Tech Stack:</strong>&nbsp;
            {project.skills}
          </Box>

          <Typography variant="h3" sx={styles.text}>
            <strong>Task:</strong> {project.task}
          </Typography>

          <Typography variant="body1" sx={styles.text}>
            <strong>Description:</strong> {project.shortDescription}
          </Typography>

          <Typography variant="body1" sx={styles.text}>
            <strong>Experience:</strong> {project.description}
          </Typography>

          <Typography variant="body1" sx={styles.text}>
            <strong>Highlights</strong>

            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Typography>

          <Box sx={styles.icons}>
            {project.link && (
              <Link target="_blank" rel="noreferrer" to={project.link}>
                <InsertLink />
              </Link>
            )}
            {/* <Link
              target="_blank"
              rel="noreferrer"
              to={`https://github.com/${GitHub}`}
            >
              <GitHub />
            </Link> */}
          </Box>

          <Button to="/projects" sx={{ mt: 8 }}>
            All Projects
          </Button>
        </Section>
      </HeaderLayout>
    </>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = Projects.find((item) => item.slug === params.slug)

  return { props: { project } }
}

export async function getStaticPaths() {
  const paths = Projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export default Page
