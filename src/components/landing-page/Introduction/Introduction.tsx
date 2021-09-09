import React from 'react'
import Logo from '@/components/Logo/Logo'

import styles from './Introduction.module.scss'
import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div>
        <Logo />
      </div>
      <div className={styles.headline}>
        This is a headline that entices readers to want to get involved in our
        alpha.
      </div>
      <div className={styles.buttons}>
        <Button text="Request an invite" secondary />
        <LinkButton text="Already a member? Log in" href="/" />
      </div>
    </section>
  )
}
