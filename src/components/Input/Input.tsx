import React from 'react'

import styles from './Input.module.scss'

export type InputProps = {
  value?: string
  label?: string
  type?: 'text' | 'number' | 'password' | 'file'
  placeholder?: string
  big?: boolean
  fullWidth?: boolean
  errorMessages?: string[]
  setValue: (value: string) => void
}

export default function Input({
  value,
  label,
  type,
  placeholder,
  big = false,
  fullWidth = false,
  errorMessages,
  setValue,
}: InputProps) {
  const input = (
    <>
      <input
        className={`${styles.input} 
          ${big ? styles.big : ''} 
          ${fullWidth ? styles.fullWidth : ''}
          ${!!label ? styles.withLabel : ''}
          ${errorMessages && !!errorMessages.length ? styles.hasErrors : ''}
        `}
        defaultValue={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      {errorMessages &&
        !!errorMessages.length &&
        errorMessages.map((error: string, index: number) => (
          <p key={index} className={styles.error}>
            {error}
          </p>
        ))}
    </>
  )

  return (
    <div className={styles.inputWrapper}>
      {!!label ? (
        <label>
          <span
            className={`${styles.label} ${
              errorMessages && !!errorMessages.length ? styles.error : ''
            }`}
          >
            {label}
          </span>
          {input}
        </label>
      ) : (
        input
      )}
    </div>
  )
}
