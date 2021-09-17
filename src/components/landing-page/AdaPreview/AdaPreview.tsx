import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import useWindowDimensions from '@/utils/hooks'

import styles from './AdaPreview.module.scss'
import Button from '@/components/Button/Button'
import { Preview, PreviewOnSlider, Topic } from '@/types'

type AdaPreviewProps = {
  adaPreviewHeadline: string
  adaPreview: Preview[]
  topics: Topic[]
  topicsDescription: string
  topicsHeadline: string
}

export default function AdaPreview({
  adaPreview,
  adaPreviewHeadline,
  topics,
  topicsHeadline,
  topicsDescription,
}: AdaPreviewProps) {
  const dimensions = useWindowDimensions()
  const [width, setWidth] = useState<number | null>(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    setWidth(dimensions.width)
  }, [dimensions])

  const Preview = ({ preview, width, index }: PreviewOnSlider) => (
    <article
      className={styles.preview}
      style={{ width: width ?? 0, left: (width ?? 0) * index }}
    >
      <Image
        src={
          preview.image_url ? preview.image_url : '/images/ada-experience.png'
        }
        width={375}
        height={513}
        layout="responsive"
        alt={preview.description}
      />
      <p className={styles.description}>{preview.description}</p>
    </article>
  )

  const Bullet = ({ index }: { index: number }) => (
    <span
      className={`${styles.bullet} ${
        index === activeIndex ? styles.active : ''
      }`}
      onClick={() => {
        setActiveIndex(index)
      }}
    ></span>
  )

  const Previews = () => (
    <>
      {adaPreview.map((item, index) => (
        <Preview
          key={index}
          preview={item.preview}
          width={width}
          index={index}
        />
      ))}
    </>
  )

  const Bullets = () => (
    <>
      {adaPreview.map((preview, index) => (
        <Bullet key={index} index={index} />
      ))}
    </>
  )

  const Topics = () => (
    <ul className={styles.topics}>
      {topics.map((item, index) => (
        <li key={index} className={styles.topic}>
          <div className={styles.icon}>
            <span className={styles.placeholder} />
          </div>
          <div className={styles.topicInfo}>
            <span className={styles.topicName}>{item.topic.name}</span>
            <p className={styles.topicDescription}>{item.topic.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <section className={styles.adaPreview}>
      <h3>{adaPreviewHeadline}</h3>
      {adaPreview && !!adaPreview.length && (
        <>
          <div className={styles.previewsWrapper}>
            <div
              className={styles.previews}
              style={{ left: -((width ?? 0) * activeIndex) }}
            >
              <Previews />
            </div>
          </div>
          <div className={styles.bullets}>
            <Bullets />
          </div>
        </>
      )}
      <hr className={styles.separator} />
      <h3>{topicsHeadline}</h3>
      <p className={styles.topicsHeader}>{topicsDescription}</p>
      {topics && !!topics.length ? <Topics /> : null}
      <div className={styles.button}>
        <Button text="Request an invite" />
      </div>
    </section>
  )
}
