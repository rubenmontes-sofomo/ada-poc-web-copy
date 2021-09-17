import Button from '@/components/Button/Button'
import React from 'react'

import styles from './Help.module.scss'

export default function Help() {
  return (
    <section className={styles.help}>
      <h3 className={styles.overlay}>
        You can help shape Ada, and change lives.
      </h3>
      <p className={styles.description}>
        Let reader know that as a participant, they will have the opportunity to
        help us build what comes next—and help other moms in the process.{' '}
      </p>
      <div className={styles.button}>
        <Button text="Become a participant" overlaySecondary={true} />
      </div>
    </section>
  )
}
