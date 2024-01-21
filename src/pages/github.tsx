import React from "react"
import Head from "next/head"

import { HeaderLayout } from "@layouts/index"

const Github = () => {
  return (
    <>
      <Head>
        <title>Github - Talha Ahmad</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Talha Ahmad" />
        <meta
          name="description"
          content="Github - Talha Ahmad - Software Engineer"
        />
        <meta
          name="keywords"
          content="resume,cv,github,Talha Ahmad,Software Engineer,JavaScript Developer"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLayout>Github</HeaderLayout>
    </>
  )
}

export default Github
