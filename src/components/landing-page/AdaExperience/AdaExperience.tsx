import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import useWindowDimensions from '@/utils/hooks'

import styles from './AdaExperience.module.scss'
import Button from '@/components/Button/Button'

type Image = {
  src: string
  width: number
  height: number
  alt: string
}

export type Experience = {
  image: Image
  description: string
}
interface ExperienceOnSlider extends Experience {
  width: number | null
  index: number
}

type AdaExperienceProps = {
  experiences: Experience[]
  topics: string[]
}

export default function AdaExperience({
  experiences,
  topics,
}: AdaExperienceProps) {
  const dimensions = useWindowDimensions()
  const [width, setWidth] = useState<number | null>(0)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    setWidth(dimensions.width)
  }, [dimensions])

  const Experience = ({
    width,
    index,
    image,
    description,
  }: ExperienceOnSlider) => (
    <article
      className={styles.experience}
      style={{ width: width ?? 0, left: (width ?? 0) * index }}
    >
      <Image
        src={image.src}
        width={375}
        height={513}
        layout="responsive"
        alt={image.alt}
      />
      <p className={styles.description}>{description}</p>
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

  const Experiences = () => (
    <>
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} width={width} index={index} />
      ))}
    </>
  )

  const Bullets = () => (
    <>
      {experiences.map((experience, index) => (
        <Bullet key={index} index={index} />
      ))}
    </>
  )

  return (
    <section className={styles.adaExperience}>
      <h3>Headline introducing the Ada experience</h3>
      {experiences && !!experiences.length && (
        <>
          <div className={styles.experiencesWrapper}>
            <div
              className={styles.experiences}
              style={{ left: -((width ?? 0) * activeIndex) }}
            >
              <Experiences />
            </div>
          </div>
          <div className={styles.bullets}>
            <Bullets />
          </div>
        </>
      )}
      <hr className={styles.separator} />
      <h3>Reveal our topics in this section</h3>
      <p className={styles.topicsHeader}>
        Introduce our top-level content containers sed posuere consectetur est
        at lobortis.
      </p>
      {topics && !!topics.length ? (
        <ul className={styles.topics}>
          {topics.map((topic, index) => (
            <li key={index} className={styles.topic}>
              <span className={styles.placeholder} />
              <span className={styles.topicName}>{topic}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className={styles.button}>
        <Button text="Request an invite" />
      </div>
    </section>
  )
}
