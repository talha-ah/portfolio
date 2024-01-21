import Head from "next/head"

import { APP_NAME } from "@utils/constants"
import { HeaderLayout } from "@layouts/index"

export default function Main() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <HeaderLayout>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </HeaderLayout>
    </>
  )
}
