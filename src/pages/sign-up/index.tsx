import React, { useEffect, useState } from 'react'
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
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(setEmail(email))

    try {
      const response = await fetch(`api/sign-up/${email}`)

      if (response.status !== 200) {
        throw new Error()
      }
      router.push('/sign-up/check-email')
    } catch (error) {
      router.push('/sign-up/email-failed')
    }
  }

  return (
    <section onClick={() => (showTooltip ? setShowTooltip(false) : null)}>
      <form className={styles.signUp} onSubmit={handleSubmit}>
        <h1>Get an invite emailed to you right now!</h1>
        <div className={styles.form}>
          <Input
            label="Email address"
            big={true}
            fullWidth={true}
            backgroundColor="yellow"
            setValue={setStateEmail}
            placeholder="email address"
          />
          <div className={styles.checkbox}>
            <div className={styles.check}>
              <Checkbox />
            </div>
            <div
              className={styles.text}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              I’m either the mother of a newborn, or am a third-trimester
              expecting mother.
            </div>
            <div
              className={styles.tooltip}
              style={{ visibility: showTooltip ? 'visible' : 'hidden' }}
            >
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
