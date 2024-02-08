import Head from "next/head"
import React, { useEffect, useState } from "react"

import { useApi } from "@hooks/useApi"
import { HeaderLayout } from "@layouts/index"

const Github = () => {
  const API = useApi()

  const [commits, setCommits] = useState<any>(null)

  const fetchCommits = async () => {
    const response = await API({
      local: true,
      method: "GET",
      url: "/api/github/commits",
    })

    setCommits(response)
  }

  useEffect(() => {
    fetchCommits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

      <HeaderLayout>Work in progress!!!</HeaderLayout>
    </>
  )
}

export default Github
