import React from 'react'

import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'

import styles from '../../styles/sign-up.module.scss'

export default function SignUp({}) {
  return (
    <section className={styles.signUp}>
      <h1>We’re working to support you, too!</h1>
      <p className={styles.text}>
        We’re just getting started with creating support for moms! We can let
        you know when we’ve expanded our offering.
      </p>
      <div className={styles.buttons}>
        <Button text="Keep me posted" />
        <LinkButton text="Close" href="/" overlay={false} />
      </div>
    </section>
  )
}
