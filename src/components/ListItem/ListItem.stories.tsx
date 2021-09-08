import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ListItem, { ListItemProps } from './ListItem'

export default {
  component: ListItem,
  title: 'Components/List Items',
  decorators: [withDesign],
} as Meta

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { title: 'List Item 1' },
    {
      title: 'List Item 1',
      description: 'This is a one line descirption of the title.',
    },
  ],
}
