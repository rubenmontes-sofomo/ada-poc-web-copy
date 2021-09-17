import Button from '@/components/Button/Button'
import { CTA, ValueProp } from '@/types'
import Image from 'next/image'
import React from 'react'
import styles from './HighlightValues.module.scss'

type HighlightValuesProps = {
  value_props: ValueProp[]
  value_props_cta: CTA
}

const Value = ({ value }: ValueProp) => (
  <article className={styles.value}>
    <div className={styles.image}>
      {value && !!value.image_url ? (
        <Image
          src={value.image_url}
          width={320}
          height={180}
          alt={value.headline}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
    <p className={styles.title}>{value.headline}</p>
    <p className={styles.description}>{value.description}</p>
  </article>
)

export default function HighlightValues({
  value_props,
  value_props_cta,
}: HighlightValuesProps) {
  return (
    <section className={styles.highlightValues}>
      <h3>Highlight value props here.</h3>
      {value_props &&
        !!value_props.length &&
        value_props.map((item: ValueProp) => (
          <Value key={item.value._metadata.uid} value={item.value} />
        ))}
      <div className={styles.button}>
        <Button text={value_props_cta.title} />
      </div>
    </section>
  )
}
