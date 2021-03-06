import { useEffect } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout } from '@/components/Layout/Layout'
import styles from '@/styles/have-you-tried.module.scss'
import { fetcher, toSEOUrl } from '@/utils/index'
import {
  generateRoutesPath,
  parseTriagesFromCMS,
  triageUpdateDone,
} from '@/utils/triage'

import { Step, Triage } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  triagesReceived,
  triagesLoaded,
  selectTriageByUID,
  triageUpdated,
} from 'src/features/triages/triagesSlice'

type StepsProps = {
  triages: Triage[]
  triageUID: string
  routesPath: string[]
  phaseFriendly: string
  stepFriendly: string
  error: string
}

export const getStaticPaths = async () => {
  const response = await fetcher('entries/triage')
  const { data, error } = response
  const slug =
    data && !!data.length
      ? data.flatMap((triage: any) => {
          return triage.phase.flatMap((phase: any) => {
            return phase.Phase.modular_blocks.map((block: any) => {
              return {
                triage: toSEOUrl(triage.title),
                phase: toSEOUrl(phase.Phase.phase_title),
                step: block.step.url_friendly_step_title,
              }
            })
          })
        })
      : {}

  const paths =
    slug && !!slug.length
      ? slug.map((slug: { triage: string; phase: string; step: string }) => {
          return {
            params: { slug: [slug.triage, slug.phase, slug.step] },
          }
        })
      : [
          {
            params: { slug: ['', '', ''] },
          },
        ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  if (context && context.params && context.params.slug) {
    try {
      const response = await fetcher('entries/triage')
      const { data, error } = response
      const { slug } = context.params

      const friendlyTriage = slug[0]
      const phaseFriendly = slug[1]
      const stepFriendly = slug[2]

      if (data && data.length) {
        const triages: Triage[] = parseTriagesFromCMS(data, friendlyTriage)
        const triage = triages.filter((triage: Triage) => {
          return triage.triage_friendly === friendlyTriage
        })[0]

        const routesPath = generateRoutesPath(triage, stepFriendly)

        const triageUID = triage.uid

        return {
          props: {
            triages,
            routesPath,
            triageUID,
            phaseFriendly,
            stepFriendly,
            error,
          },
        }
      }
    } catch (error) {
      return { props: {} }
    }
  }

  return { props: {} }
}

export default function Steps({
  triages,
  triageUID,
  routesPath,
  phaseFriendly,
  stepFriendly,
  error,
}: StepsProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const triagesFetched = useAppSelector((state) => triagesLoaded(state))
  const triage = useAppSelector((state) => selectTriageByUID(state, triageUID))
  const nextStep = routesPath[1]
  const currentPhase = triage?.phases.filter(
    (phase) => phase.phase_friendly === phaseFriendly
  )[0]
  const step = currentPhase?.steps.filter(
    (step) => step.step_friendly === stepFriendly
  )[0]
  const phasesAttempted = triage?.phases.map((phase) => {
    if (phase.phase_friendly !== currentPhase?.phase_friendly)
      return phase.steps.filter((step) => !step.done && step.tried)
  })
  const hasPhasesAttempted = phasesAttempted?.some((a) => a?.length)
  const setStepClassName = (step: Step) => {
    let className
    if (step.tried && !step.done) className = styles.tried
    if (step.step_friendly === stepFriendly) className = styles.current
    return `${styles.step} ${className}`
  }

  const markAsDone = (done: boolean) => {
    if (triage) {
      window.analytics.track('Triage visited', {})

      const changes = triageUpdateDone(
        triage,
        phaseFriendly,
        stepFriendly,
        done
      )

      dispatch(
        triageUpdated({
          id: triage.uid,
          changes,
        })
      )

      if (!done && nextStep) {
        router.push(nextStep)
      }
    }
  }

  useEffect(() => {
    if (step?.change_tactics && nextStep) {
      setTimeout(() => {
        router.push(nextStep)
      }, 3000)
    }
  }, [nextStep, router, step?.change_tactics])

  useEffect(() => {
    if (!triagesFetched) {
      dispatch(triagesReceived(triages))
    }
  }, [triages, dispatch, triagesFetched])

  useEffect(() => {
    if (routesPath) {
      dispatch(
        triageUpdated({ id: triageUID, changes: { routes_path: routesPath } })
      )
    }
  }, [dispatch, triageUID, routesPath])

  return (
    <Layout options={{ showBackButton: true, hideLogo: true }}>
      <Head>
        <title>Have you tried</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {step?.take_a_deep_breath || step?.change_tactics ? (
          <>
            <section>
              {step && (
                <>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </>
              )}
            </section>
            {step?.take_a_deep_breath && (
              <footer className={styles.actions}>
                <button
                  className="button primary small"
                  onClick={() => markAsDone(false)}
                >
                  I&apos;m ready
                </button>
              </footer>
            )}
          </>
        ) : (
          <>
            <div>
              <p>Nowm let&apos;s go through the checklist...</p>
            </div>
            <section>
              {step && (
                <>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </>
              )}
            </section>
            <section>
              {currentPhase && (
                <div className={styles.currentPhase}>
                  <ul className={styles.steps}>
                    {currentPhase.steps.map((step) => {
                      if (!step.take_a_deep_breath && !step.change_tactics) {
                        return (
                          <li key={step.uid} className={setStepClassName(step)}>
                            {step.short_title}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              )}
            </section>
            {hasPhasesAttempted ? (
              <section>
                <p> You did your best on these...</p>
                {phasesAttempted?.map((steps, index) => (
                  <ul key={index} className={styles.steps}>
                    {steps?.map((step) => {
                      if (!step.take_a_deep_breath || !step.change_tactics)
                        return (
                          <li key={step.uid} className={setStepClassName(step)}>
                            {step?.short_title}
                          </li>
                        )
                    })}
                  </ul>
                ))}
              </section>
            ) : null}
            <footer className={styles.actions}>
              <button
                className="circled-button fail"
                onClick={() => markAsDone(false)}
              >
                X
              </button>
              <button
                className="circled-button success"
                onClick={() => markAsDone(true)}
              >
                V
              </button>
            </footer>
          </>
        )}
      </main>
    </Layout>
  )
}
