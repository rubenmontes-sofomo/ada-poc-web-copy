import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import LinkButton from '@/components/Link/Link'
import Checkbox from '@/components/Checkbox/Checkbox'
import { useAppDispatch } from '@/store/hooks'

import { setEmail } from 'src/features/user/userSlice'

import styles from '../../styles/sign-up.module.scss'

export default function SignUp({}) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [email, setStateEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setEmail(email))
    router.push('/sign-up/check-email')
  }

  return (
    <section className={styles.signUp}>
      <form onSubmit={handleSubmit}>
        <h1>Get an invite emailed to you right now!</h1>
        <div className={styles.form}>
          <Input
            label="Email address"
            big={true}
            fullWidth={true}
            setValue={setStateEmail}
          />
          <div className={styles.checkbox}>
            <div className={styles.check}>
              <Checkbox />
            </div>
            <div className={styles.text}>
              I’m either the mother of a newborn, or am a third-trimester
              expecting mother.
            </div>
            <div className={styles.tooltip}>
              Ada is currently tailored to the new mom experience. If this
              statement does not describe you, we’ll keep you posted when we
              expand our offering.
            </div>
          </div>
          <LinkButton
            text="> Why do I need to check this box?"
            href="/"
            alternative={true}
            noHorizontalPadding={true}
          />
        </div>
        <div className={styles.buttons}>
          <Button text="Send my invite" />
          <LinkButton
            text="How will my email be used?"
            href="/"
            alternative={true}
          />
        </div>
      </form>
    </section>
  )
}
