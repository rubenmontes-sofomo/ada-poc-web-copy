import React from 'react'
import Head from 'next/head'

import { Layout } from '@/components/Layout/Layout'
import LPIntroduction from '@/components/landing-page/Introduction/Introduction'

export default function LandingPage({}) {
  return (
    <Layout>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LPIntroduction />
        {/* <LPHighlightValueProps />
      <LPTopics />
      <LPHelp />
      <LPOurMission />
      <LPExperts />
      <LPCTAHeadline />
      <Footer /> */}
      </main>
    </Layout>
  )
}
