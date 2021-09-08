import React from 'react'
import Image from 'next/image'

import styles from './ListItem.module.scss'

type Item = { title: string; description?: string }

export type ListItemProps = {
  items: Item[]
}

export default function ListItem({ items }: ListItemProps) {
  return (
    <ul className={styles.list}>
      {items.map((item: Item, index: number) => (
        <li key={index} className={styles.listItem}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>{item.title}</p>
            <div className={styles.arrow}>
              <Image
                src="/icons/arrow-simple-right.png"
                width={10}
                height={17}
                alt={item.title}
              />
            </div>
          </div>
          {!!item.description && (
            <p className={styles.description}>{item.description}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
