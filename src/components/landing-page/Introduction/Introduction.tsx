import React from 'react'
import Logo from '@/components/Logo/Logo'

import styles from './Introduction.module.scss'
import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'
import { CTA } from '@/types'

type IntroductionProps = {
  headline: string
  hero_cta_1: CTA
  hero_cta_2: CTA
}

export default function Introduction({
  headline,
  hero_cta_1,
  hero_cta_2,
}: IntroductionProps) {
  return (
    <section className={styles.introduction}>
      <div>
        <Logo />
      </div>
      <div className={styles.headline}>{headline}</div>
      <div className={styles.buttons}>
        <Button text={hero_cta_1.title} secondary />
        <LinkButton text={hero_cta_2.title} href="/" />
      </div>
    </section>
  )
}
