import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Image
        src="/images/willow-logo-white.png"
        width={61}
        height={39}
        alt="Willow"
      />
    </div>
  )
}
