import React from 'react'
import Link from 'next/link'
import styles from './Link.module.scss'

export type LinkProps = {
  text: string
  href: string
  overlay?: boolean
}

export default function LinkButton({ text, href, overlay = true }: LinkProps) {
  return (
    <Link href={href}>
      <a className={`${styles.link} ${overlay ? styles.overlay : ''}`}>
        {text}
      </a>
    </Link>
  )
}
