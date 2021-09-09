import Button from '@/components/Button/Button'
import React from 'react'

import styles from './CTAButton.module.scss'

export default function CTAButton() {
  return (
    <section className={styles.ctaButton}>
      <h3>This headline is a wrap up CTA.</h3>
      <div className={styles.button}>
        <Button text="Request an invite" secondary={true} />
      </div>
    </section>
  )
}
