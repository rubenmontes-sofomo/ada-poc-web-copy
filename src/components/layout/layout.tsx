import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
  options?: { showBackButton?: boolean; hideLogo?: boolean }
}
export const Layout = ({ children, options }: LayoutProps) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      {!options?.hideLogo && (
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/images/willow-logo-green.png"
                width={30}
                height={46}
                alt="Willow logo"
              />
            </a>
          </Link>
        </div>
      )}
      {options?.showBackButton && (
        <div className={styles.goBack}>
          <button
            className="button small secondary"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      )}
      {children}
    </div>
  )
}
