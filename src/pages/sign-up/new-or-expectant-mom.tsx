import React from 'react'

import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'

import styles from '../../styles/sign-up.module.scss'

export default function SignUp({}) {
  return (
    <section className={styles.signUp}>
      <h1>Are you a new or expectant mom?</h1>
      <p className={styles.text}>
        Ada is currently tailored to the new mom experience. If you’re the
        mother of a newborn, or a third-trimester expecting mother, you’ll get
        the most out of Ada!
      </p>
      <div className={styles.buttons}>
        <Button text="Yes, I am!" />
        <LinkButton
          text="No, I'm not"
          href="/sign-up/keep-me-posted"
          alternative={true}
        />
      </div>
    </section>
  )
}
