import React from 'react'
import Head from 'next/head'

import { Layout } from '@/components/Layout/Layout'
import LPIntroduction from '@/components/landing-page/Introduction/Introduction'
import LPHighlightValues, {
  Value,
} from '@/components/landing-page/HighlightValues/HighlightValues'
import LPAdaExperience, {
  Experience,
} from '@/components/landing-page/AdaExperience/AdaExperience'
import LPHelp from '@/components/landing-page/Help/Help'

const values: Value[] = [
  {
    title: 'Backed by science. Grounded in real-world experience.',
    description:
      'Problem statement about how it’s hard to find trusted information and how we solve by partnering with expert moms.',
  },
  {
    title: 'Curated content focused on mom, tailored to baby’s age.',
    description:
      'Position our copy as solving the problem of you don’t know what you don’t know. We give you the info you need when you need it.',
  },
]

const experiences: Experience[] = [
  {
    image: {
      src: '/images/ada-experience.png',
      width: 375,
      height: 513,
      alt: 'Ada Experience',
    },
    description:
      'Bite-sized content helps you cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed.',
  },
  {
    image: {
      src: '/images/ada-experience.png',
      width: 375,
      height: 513,
      alt: 'Ada Experience',
    },
    description:
      'Our comprehensive guides will tell you everything you need to know to etiam porta sem malesuada magna mollis euismod.',
  },
  {
    image: {
      src: '/images/ada-experience.png',
      width: 375,
      height: 513,
      alt: 'Ada Experience',
    },
    description:
      'Watch, listen and read. Our content is created with context in mind. Aenean lacinia bibendum nulla sed consectetur. ',
  },
]

const topics: string[] = [
  'Baby Communication',
  'Development',
  'Sleep',
  'Self Care',
  'Family Care',
  'Nutrition',
]

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
        <LPHighlightValues values={values} />
        <LPAdaExperience experiences={experiences} topics={topics} />
        <LPHelp />
        {/*<LPOurMission />
      <LPExperts />
      <LPCTAHeadline />
      <Footer /> */}
      </main>
    </Layout>
  )
}
