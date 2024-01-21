import React from "react"
import Head from "next/head"

import { Box, Container } from "@mui/material"

import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"

const styles = {
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}

const Main = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout>
        <Box sx={styles.root}>
          <Container maxWidth="sm">
            <h1>Hey, I&apos;m Talha.</h1>

            <p>
              I am a Software Engineer with 5+ years of experience in building
              web and mobile applications. I am currencly working at{" "}
              <strong>Skupreme</strong> as a{" "}
              <strong>Senior Software Engineer</strong>.
            </p>

            <p>
              I have worked with different technologies like{" "}
              <strong>React</strong>, <strong>Node</strong>,{" "}
              <strong>Express</strong>, <strong>Next.js</strong>,{" "}
              <strong>Django</strong>, <strong>FastAPI</strong>,{" "}
              <strong>GraphQL</strong>, <strong>REST</strong>,{" "}
              <strong>PostgreSQL</strong>, <strong>MongoDB</strong>,{" "}
              <strong>Redis</strong>, <strong>Socket.io</strong>, and{" "}
              <strong>WebSockets.</strong>
            </p>

            <p>Let&apos;s Make the Web. Better. Faster 🚀</p>
          </Container>
        </Box>
      </HeaderLayout>
    </>
  )
}

export default Main
