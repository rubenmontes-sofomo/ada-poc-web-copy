import Button from '@/components/Button/Button'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './CTAButton.module.scss'

export default function CTAButton() {
  const router = useRouter()
  return (
    <section className={styles.ctaButton}>
      <h3>This headline is a wrap up CTA.</h3>
      <div className={styles.button}>
        <Button
          text="Request an invite"
          secondary={true}
          onClick={() => router.push('/')}
        />
      </div>
    </section>
  )
}
