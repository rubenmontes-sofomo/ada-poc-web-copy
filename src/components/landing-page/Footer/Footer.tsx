import React from 'react'
import Image from 'next/image'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src="/images/willow-logo-lighter.png"
          width={61}
          height={39}
          alt="Willow logo"
        />
      </div>
      <div className={styles.copyright}>
        ©2021 Willow. All rights reserved. Willow is a trademark of Willow
        Innovations, Inc.
      </div>
    </footer>
  )
}
