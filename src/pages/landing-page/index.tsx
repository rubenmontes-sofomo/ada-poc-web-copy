import { promises as fs } from 'fs'
import path from 'path'

import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Layout } from '@/components/Layout/Layout'
import Introduction from '@/components/landing-page/Introduction/Introduction'
import HighlightValues, {
  Value,
} from '@/components/landing-page/HighlightValues/HighlightValues'
import AdaExperience, {
  Experience,
} from '@/components/landing-page/AdaExperience/AdaExperience'
import Help from '@/components/landing-page/Help/Help'
import OurMission, {
  Expert,
} from '@/components/landing-page/OurMission/OurMission'
import CTAButton from '@/components/landing-page/CTAButton/CTAButton'
import Footer from '@/components/landing-page/Footer/Footer'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login, selectEmail, selectLoggedIn } from 'src/features/user/userSlice'
import { useAppSelector } from '@/store/hooks'

type LandingPageProps = {
  values: Value[]
  experiences: Experience[]
  topics: string[]
  experts: Expert[]
}

export const getStaticProps: GetStaticProps = async () => {
  const dataPath = path.join(
    process.cwd(),
    'src/pages/landing-page/data/data.json'
  )
  const { values, experiences, topics, experts } = JSON.parse(
    await fs.readFile(dataPath, 'utf8')
  )

  return {
    props: {
      values,
      experiences,
      topics,
      experts,
    },
  }
}

export default function LandingPage({
  values,
  experiences,
  topics,
  experts,
}: LandingPageProps) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loggedIn } = router.query
  const email = useAppSelector((state) => selectEmail(state))

  useEffect(() => {
    if (loggedIn) {
      dispatch(login())
    }
  }, [dispatch, loggedIn])

  useEffect(() => {
    window.analytics.identify(email, {
      email: email,
    })
  }, [email])

  return (
    <Layout>
      <Head>
        <title>{loggedIn ? 'Logged In -' : 'Logged Out - '}Landing Page</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Introduction />
        <HighlightValues values={values} />
        <AdaExperience experiences={experiences} topics={topics} />
        <Help />
        <OurMission experts={experts} />
        <CTAButton />
        <Footer />
      </main>
    </Layout>
  )
}
