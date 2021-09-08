import React from 'react'

import ListItem from '@/components/ListItem/ListItem'

export default function UI() {
  return (
    <>
      <ListItem
        items={[
          {
            title: 'List Item 1',
            description: 'This is a one line description of the title.',
          },
        ]}
      />
    </>
  )
}
