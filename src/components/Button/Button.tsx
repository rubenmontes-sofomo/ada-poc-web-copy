import Image from 'next/image'
import React from 'react'

import styles from './Button.module.scss'

type ButtonIcon = {
  src: string
  width: number
  height: number
  alt: string
}

export type ButtonProps = {
  text: string
  small?: boolean
  big?: boolean
  icon?: ButtonIcon
  secondary?: boolean
  disabled?: boolean
  overlayPrimary?: boolean
  overlaySecondary?: boolean
  onClick: () => void
}

export default function Button({
  text,
  small,
  big,
  icon,
  secondary,
  disabled,
  overlayPrimary,
  overlaySecondary,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`
      ${styles.button} 
      ${small ? styles.small : ''} 
      ${big ? styles.big : ''}
      ${secondary ? styles.secondary : ''}
      ${overlayPrimary ? styles.overlayPrimary : ''}
      ${overlaySecondary ? styles.overlaySecondary : ''}
      ${disabled ? styles.disabled : ''}
    `}
      onClick={onClick}
    >
      {icon && !small && (
        <span className={styles.icon}>
          <Image
            src={icon.src}
            width={icon.width}
            height={icon.height}
            alt={icon.alt}
          />
        </span>
      )}
      <span className={styles.text}>{text}</span>
    </button>
  )
}
