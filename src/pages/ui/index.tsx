import React from 'react'

import Button from '@/components/Button/Button'

export default function UI() {
  return (
    <Button
      text="Basic Button Primary"
      icon={{
        src: '/icons/bookmark-white.png',
        width: 17,
        height: 24,
        alt: 'Bookmark',
      }}
      overlaySecondary={true}
    />
  )
}
