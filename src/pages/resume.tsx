import Head from "next/head"
import React, { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"

import { Box, Theme, ButtonGroup } from "@mui/material"
import { Print, NavigateNext, NavigateBefore } from "@mui/icons-material"

import { Button } from "@ui/Button"
import { HeaderLayout } from "@layouts/index"
import { jobs, Tags } from "@components/Resume/data"
import { TwoColumn, OneColumn } from "@components/Resume"

const BASE_FONT_SIZE = "11px"

const styles = {
  content: (theme: Theme, fontFamily: string) => ({
    margin: "auto",
    padding: "44px",

    maxWidth: "792px",
    maxHeight: "1122.24px",

    borderRadius: "1rem",
    border: `4px solid ${theme.palette.secondary.main}`,

    overflow: "hidden",

    fontFamily: fontFamily,
    fontSize: BASE_FONT_SIZE,
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,

    "@media print": {
      "@page": {
        size: "A4 portrait",
      },

      margin: 0,
      padding: 0,

      border: 0,
      borderRadius: 0,

      top: 0,
      left: 0,
      zIndex: 9999,
      position: "absolute",
    },
  }),
  buttons: {
    mb: 4,
    gap: 2,
    display: "flex",
    justifyContent: "flex-end",

    "@media print": {
      display: "none",
    },
  },
}

interface Props {
  index: number
  fontFamily: string
  setIndex: (args: any) => void
  setResumeType: (args: any) => void
  component: React.ForwardRefExoticComponent<any>
}

const ResumeContent = ({
  index,
  setIndex,
  component,
  fontFamily,
  setResumeType,
}: Props) => {
  const componentRef = useRef(null)

  const onSwitch = () => {
    setResumeType((prev: any) => (prev + 1) % 2)
  }

  const onPrevious = () => {
    setIndex((prev: any) =>
      prev - 1 < 0 ? jobs.length - 1 : (prev - 1) % jobs.length
    )
  }

  const onNext = () => {
    setIndex((prev: any) => (prev + 1) % jobs.length)
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 34px 44px;
      }

      body {
        // For custom print function and to get the html content
        max-width: 800px;
        padding: 34px 44px;
        max-height: 1122.24px;

        color: black !important;
        background-color: white !important;
        font-family: Lato, Roboto, sans-serif;
        font-size: ${BASE_FONT_SIZE} !important;
      }

      @media print {
        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
          max-height: 100%;
        }
      }
    `,
    onAfterPrint: () => {
      onNext()
    },
    print: async (iFrame: HTMLIFrameElement) => {
      //github.com/gregnb/react-to-print/issues/484
      if (iFrame) {
        const fd = iFrame.contentDocument
        if (fd) {
          // const html = fd.getElementsByTagName("html")[0].outerHTML
        }
      }

      window.print()
    },
  })

  const ResumeComponent = component

  return (
    <>
      <Box sx={styles.buttons}>
        <ButtonGroup size="small" aria-label="print-actions">
          <Button onClick={onPrevious} startIcon={<NavigateBefore />}>
            Previous
          </Button>
          <Button onClick={onNext} endIcon={<NavigateNext />}>
            Next
          </Button>
        </ButtonGroup>
        <Button onClick={onSwitch}>Switch Resume</Button>

        <Button onClick={handlePrint} startIcon={<Print />}>
          Print
        </Button>
      </Box>

      <Tags />

      <Box sx={(theme) => styles.content(theme, fontFamily)}>
        <ResumeComponent ref={componentRef} index={index} />
      </Box>
    </>
  )
}

const Resume = () => {
  const [index, setIndex] = useState(0)
  const [resumeType, setResumeType] = useState(0)

  return (
    <>
      <Head>
        <title>Talha Ahmad - {jobs[index]} Engineer</title>

        <meta name="author" content="Talha Ahmad" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={`Resume - Talha Ahmad - ${jobs[index]} Engineer`}
        />
        <meta
          name="keywords"
          content={`resume,cv,Talha Ahmad,${jobs.join(
            " Developer, "
          )}, ${jobs.join(" Engineer, ")}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout>
        <ResumeContent
          index={index}
          setIndex={setIndex}
          setResumeType={setResumeType}
          component={resumeType === 0 ? OneColumn : TwoColumn}
          fontFamily={
            resumeType === 0 ? "Lato, Roboto, sans-serif" : "Jost, sans-serif"
          }
        />
      </HeaderLayout>
    </>
  )
}

export default Resume
