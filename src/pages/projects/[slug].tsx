import React from "react"
import Head from "next/head"

import { Box, Typography } from "@mui/material"

import { Button } from "@ui/Button"
import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"
import { Projects } from "@components/Portfolio/data"
import { Section } from "@components/Portfolio/Section"
import { ProjectType } from "@components/Portfolio/types"

const styles = {
  root: {},
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    justifyContent: "space-between",
  },
  text: {
    marginBottom: "24px",
    lineHeight: "1.785em",
    color: "text.secondary",
    fontSize: "clamp(14px, 4vw, 16px)",
  },
  skill: {
    fontWeight: "400",
    marginRight: "15px",
    lineHeight: "1.75em",
    color: "text.secondary",
    display: "inline-block",
    fontSize: "clamp(14px, 4vw, 16px)",
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
        <Section title={project.title}>
          <Box sx={styles.root}>
            <Box sx={styles.text}>
              <strong>Tech Stack</strong>:&nbsp;
              {project.skills}
            </Box>

            <Typography variant="h3" sx={styles.text}>
              <strong>Role</strong>: {project.role}
            </Typography>

            <Typography variant="body1" sx={styles.text}>
              <strong>Description</strong>: {project.description}
            </Typography>

            <Typography variant="body1" sx={styles.text}>
              <strong>Experience</strong>: {project.experience}
            </Typography>

            <Typography variant="body1" sx={styles.text}>
              <strong>Highlights</strong>

              <ul>
                {project.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Typography>

            <Button to="/projects" sx={{ mt: 8 }}>
              All Projects
            </Button>
          </Box>
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
