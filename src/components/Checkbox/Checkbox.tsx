import React from 'react'

import styles from './Checkbox.module.css'

type CheckboxProps = {
  checked?: boolean
  text?: string
}

export default function Checkbox({ checked, text }: CheckboxProps) {
  return (
    <label className={styles.container}>
      {!!text && text}
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark} />
    </label>
  )
}
