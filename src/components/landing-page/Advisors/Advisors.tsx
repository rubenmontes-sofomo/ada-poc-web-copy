import React from 'react'
import Image from 'next/image'

import styles from './Advisors.module.scss'
import { Advisor, AdvisorOnChart } from '@/types'

type AdvisorsProps = {
  advisorPreviewHeadline: string
  advisors: Advisor[]
}

export default function Advisors({ advisors }: AdvisorsProps) {
  const circleWidth = 254
  const circleHeight = 241

  const Advisor = ({ advisor, position, imageUrl }: AdvisorOnChart) => (
    <div className={styles.advisor} style={position}>
      <Image
        src={advisor.image_url ? advisor.image_url : imageUrl ? imageUrl : ''}
        width={70}
        height={70}
        alt={advisor.name}
        layout="fixed"
      ></Image>
    </div>
  )

  const Advisors = () => {
    const avatarWidth = 70
    const avatarHeight = 70

    return (
      <div className={styles.advisors}>
        <Advisor
          {...advisors[0]}
          position={{
            top: 0 - avatarHeight / 2,
            left: circleWidth / 2 - avatarWidth / 2,
          }}
          imageUrl="/images/expert1.png"
        />
        <Advisor
          {...advisors[1]}
          position={{
            top: circleHeight / 2 - avatarHeight / 2,
            left: circleWidth - avatarWidth / 2,
          }}
          imageUrl="/images/expert2.png"
        />
        <Advisor
          {...advisors[2]}
          position={{
            top: circleHeight - avatarHeight / 2,
            left: circleWidth / 2 - avatarWidth / 2,
          }}
          imageUrl="/images/expert3.png"
        />
        <Advisor
          {...advisors[3]}
          position={{
            top: circleHeight / 2 - avatarHeight / 2,
            left: -avatarWidth / 2,
          }}
          imageUrl="/images/expert4.png"
        />
      </div>
    )
  }

  return (
    <section className={styles.advisors}>
      <h3>
        Differentiate and build trust by highlighting our network of doctors and
        experts.
      </h3>
      {advisors && !!advisors.length && (
        <div className={styles.advisorsWrapper}>
          <Advisors />
        </div>
      )}
      <p className={styles.advisorName}>Dr.Sarah Smith</p>
      <p className={styles.advisorDescription}>
        Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus
        porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sagittis lacus vel augue laoreet rutrum
      </p>
    </section>
  )
}
