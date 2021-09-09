import React from 'react'
import Image from 'next/image'

import LinkButton from '@/components/Link/Link'
import styles from './OurMission.module.scss'

export type Expert = {
  avatar: {
    src: string
    width: number
    height: number
    alt: string
  }
  position?: { top: number; left: number }
}

type OurMissionProps = {
  experts: Expert[]
}

export default function OurMission({ experts }: OurMissionProps) {
  const circleWidth = 254
  const circleHeight = 241

  const Expert = ({ avatar, position }: Expert) => (
    <div className={styles.expert} style={position}>
      <Image
        src={avatar.src}
        width={avatar.width}
        height={avatar.height}
        alt={avatar.alt}
        layout="fixed"
      ></Image>
    </div>
  )

  const Experts = () => {
    const avatarWidth = experts[0].avatar.width
    const avatarHeight = experts[0].avatar.height

    return (
      <div className={styles.experts}>
        <Expert
          {...experts[0]}
          position={{
            top: 0 - avatarHeight / 2,
            left: circleWidth / 2 - avatarWidth / 2,
          }}
        />
        <Expert
          {...experts[1]}
          position={{
            top: circleHeight / 2 - avatarHeight / 2,
            left: circleWidth - avatarWidth / 2,
          }}
        />
        <Expert
          {...experts[2]}
          position={{
            top: circleHeight - avatarHeight / 2,
            left: circleWidth / 2 - avatarWidth / 2,
          }}
        />
        <Expert
          {...experts[3]}
          position={{
            top: circleHeight / 2 - avatarHeight / 2,
            left: -avatarWidth / 2,
          }}
        />
      </div>
    )
  }

  return (
    <section className={styles.ourMission}>
      <div className={styles.placeholder} />
      <h3>
        Explain why we’re doing this. Willow is on a mission to condimentum
        nibh, ut fermentum massa justo sit amet.
      </h3>
      <p>
        Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
        cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
        sit amet risus.
      </p>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Vivamus sagittis s dolor auctor.
      </p>
      <hr className={styles.separator} />
      <h3>
        Differentiate and build trust by highlighting our network of doctors and
        experts.
      </h3>
      {experts && !!experts.length && (
        <div className={styles.expertsWrapper}>
          <Experts />
        </div>
      )}
      <p className={styles.expertName}>Dr.Sarah Smith</p>
      <p className={styles.expertDescription}>
        Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus
        porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sagittis lacus vel augue laoreet rutrum
      </p>
      <div className={styles.button}>
        <LinkButton text="Learn more" href="/" overlay={false} icon={true} />
      </div>
    </section>
  )
}
