import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { Layout } from '@/components/Layout/Layout'
import Introduction from '@/components/landing-page/Introduction/Introduction'
import HighlightValues from '@/components/landing-page/HighlightValues/HighlightValues'
import AdaPreview from '@/components/landing-page/AdaPreview/AdaPreview'
import Help from '@/components/landing-page/Help/Help'
import Advisors from '@/components/landing-page/Advisors/Advisors'
import Footer from '@/components/landing-page/Footer/Footer'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login, selectEmail } from 'src/features/user/userSlice'
import { useAppSelector } from '@/store/hooks'
import { CSLandingPage } from '@/types'
import { fetcher } from '@/utils/index'

type LandingPageProps = {
  data: CSLandingPage[]
  error: any
}

export const getStaticProps: GetStaticProps = async () => {
  const props: LandingPageProps = await fetcher('entries/landing_page_alpha_v2')
  return {
    props,
  }
}

export default function LandingPage({ data, error }: LandingPageProps) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loggedIn } = router.query
  const email = useAppSelector((state) => selectEmail(state))
  console.log(data)
  const landingPage = data && !!data.length ? data[0] : null

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
        {landingPage && (
          <>
            <Introduction
              headline={landingPage.headline}
              hero_cta_1={landingPage.hero_cta_1}
              hero_cta_2={landingPage.hero_cta_2}
            />
            <HighlightValues
              value_props={landingPage.value_props}
              value_props_cta={landingPage.value_props_cta}
            />
            <AdaPreview
              adaPreviewHeadline={landingPage.ada_preview_headline}
              adaPreview={landingPage.ada_preview}
              topics={landingPage.topics}
              topicsDescription={landingPage.topics_preview_description}
              topicsHeadline={landingPage.topics_preview_headline}
            />
            <Advisors
              advisorPreviewHeadline={landingPage.advisors_preview_headline}
              advisors={landingPage.advisors}
            />
            <Help />
            <Footer />
          </>
        )}
      </main>
    </Layout>
  )
}
