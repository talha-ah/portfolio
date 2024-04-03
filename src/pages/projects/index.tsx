import React from "react"
import Head from "next/head"

import { Box, Grid } from "@mui/material"

import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"
import { Project } from "@components/Portfolio/Project"

import { Projects } from "@components/Portfolio/data"
import { Section } from "@components/Portfolio/Section"

const styles = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}

const Page = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout mb="0">
        <Box sx={styles.root}>
          <Section id="projects" title="Projects">
            <Grid container spacing={2}>
              {Projects.map((item) => (
                <Grid key={item.title} item xs={12} sm={6} md={4}>
                  <Project project={item} />
                </Grid>
              ))}
            </Grid>
          </Section>
        </Box>
      </HeaderLayout>
    </>
  )
}

export default Page
