import Head from "next/head"
import React from "react"

import { Box, Container } from "@mui/material"

import { HeaderLayout } from "@layouts/index"
import { jobs } from "@components/Portfolio/data"
import { useResume } from "@components/Resume/useResume"
import { Resume as Main } from "@components/Resume/Main"
import { Resume as OneColumn } from "@components/Resume/OneColumn"
import { Resume as TwoColumn } from "@components/Resume/TwoColumn"

const Resume = () => {
  const { ref, styles, resume, buttons, type } = useResume()

  const getResumeComponent = () => {
    if (type === "one-column") return OneColumn
    if (type === "two-column") return TwoColumn
    else return Main
  }

  const Component = getResumeComponent()

  return (
    <>
      <Head>
        <title>
          {resume.name} - {resume.role}
        </title>

        <meta name="author" content={resume.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Resume - ${resume.name} - ${resume.role}`}
        />
        <meta
          name="keywords"
          content={`resume,cv,${resume.name},${jobs.join(", ")}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout>
        <Container maxWidth="xl">
          {buttons}

          <Box sx={styles.content}>
            <Component ref={ref} {...resume} />
          </Box>
        </Container>
      </HeaderLayout>
    </>
  )
}

export default Resume
