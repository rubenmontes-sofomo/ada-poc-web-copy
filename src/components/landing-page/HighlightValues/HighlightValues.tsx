import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './HighlightValues.module.scss'

type HighlightValuesProps = {
  values: Value[]
}

export type Value = {
  title: string
  description: string
  thumbnail?: {
    src: string
    width: number
    height: number
    alt: string
  }
}

const Value = ({ title, description, thumbnail }: Value) => (
  <article className={styles.value}>
    <div className={styles.thumbnail}>
      {thumbnail && (
        <Image
          src={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={thumbnail.alt}
        />
      )}
    </div>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
  </article>
)

export default function HighlightValues({ values }: HighlightValuesProps) {
  return (
    <section className={styles.highlightValues}>
      <h3>Highlight value props here.</h3>
      {values &&
        !!values.length &&
        values.map((value, index) => <Value key={index} {...value} />)}
      <div className={styles.button}>
        <Button text="Request an invite" />
      </div>
    </section>
  )
}
