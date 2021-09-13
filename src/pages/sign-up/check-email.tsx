import React from 'react'

import Button from '@/components/Button/Button'
import { useAppSelector } from '@/store/hooks'
import { selectEmail } from 'src/features/user/userSlice'

import styles from '../../styles/sign-up.module.scss'

export default function SignUp({}) {
  const email = useAppSelector((state) => selectEmail(state))

  return (
    <section className={styles.signUp}>
      <h1>Please check your email</h1>
      <p className={styles.text}>
        We&apos;ve emailed your Ada invitation to: <strong>{email}</strong>{' '}
      </p>
      <div className={styles.buttons} style={{ marginBottom: 40 }}>
        <p className={styles.info}>
          Don’t see your email? Try checking your spam or junk folders. Still
          don’t see it?
        </p>
        <Button text="Send my invite" overlayPrimary={true} />
      </div>
    </section>
  )
}
