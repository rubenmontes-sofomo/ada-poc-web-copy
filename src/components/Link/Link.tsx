import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Link.module.scss'

export type LinkProps = {
  text: string
  href: string
  overlay?: boolean
  icon?: boolean
}

export default function LinkButton({
  text,
  href,
  overlay = true,
  icon,
}: LinkProps) {
  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${overlay ? styles.overlay : ''} ${
          icon ? styles.withIcon : ''
        }`}
      >
        <span className={styles.text}>{text}</span>
        {icon && (
          <span className={styles.icon}>
            <Image
              src="/icons/arrow-right.png"
              width={16}
              height={17}
              alt={text}
            />
          </span>
        )}
      </a>
    </Link>
  )
}
