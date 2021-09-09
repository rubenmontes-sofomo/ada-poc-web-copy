import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './layout.module.scss'

type LayoutOptions = {
  fullHeight?: boolean
  showBackButton?: boolean
  hideLogo?: boolean
}

type LayoutProps = {
  children: React.ReactNode
  backgroundColor?: 'default' | 'yellow' | 'green' | 'darkgreen'
  options?: LayoutOptions
}
export const Layout = ({
  children,
  backgroundColor = 'default',
  options,
}: LayoutProps) => {
  return <div style={{ backgroundColor }}>{children}</div>
}
