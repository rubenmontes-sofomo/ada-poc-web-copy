import React from 'react'

import Input from '@/components/Input/Input'

import styles from '../../styles/sign-up.module.scss'
import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'
import { useAppSelector } from '@/store/hooks'
import { selectEmail } from 'src/features/user/userSlice'

export default function SignUp({}) {
  const email = useAppSelector((state) => selectEmail(state))

  return (
    <section className={styles.signUp}>
      <h1>Please check your email</h1>
      <p style={{ textAlign: 'center' }}>
        We&apos;ve emailed your Ada invitation to: <strong>{email}</strong>{' '}
      </p>
      <div className={styles.buttons}>
        <Button text="Send my invite" />
        <LinkButton
          text="How will my email be used?"
          href="/"
          alternative={true}
        />
      </div>
    </section>
  )
}
