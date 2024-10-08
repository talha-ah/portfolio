import "../styles/globals.css"

import React from "react"
import Head from "next/head"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"

import { SnackbarProvider } from "notistack"
import { CacheProvider, EmotionCache } from "@emotion/react"

import { APP_NAME } from "@utils/constants"
import { AuthGuard } from "@auth/AuthGuard"
import { AppProvider } from "@contexts/index"
import { AuthProvider } from "@auth/AuthProvider"

import emotionCache from "@utils/emotionCache"
import ThemeCustomization from "@styles/themes/index"

const createEmotionCache = emotionCache()

interface LocalAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPage & { requireAuth?: boolean }
}

export default function App(props: Readonly<LocalAppProps>) {
  const { Component, emotionCache = createEmotionCache, pageProps } = props

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AppProvider>
        <CacheProvider value={emotionCache}>
          <ThemeCustomization>
            <SnackbarProvider maxSnack={3}>
              <AuthProvider>
                <AnimatePresence>
                  <AuthGuard requireAuth={Component.requireAuth}>
                    <Component {...pageProps} />
                  </AuthGuard>
                </AnimatePresence>
              </AuthProvider>
            </SnackbarProvider>
          </ThemeCustomization>
        </CacheProvider>
      </AppProvider>
    </>
  )
}
