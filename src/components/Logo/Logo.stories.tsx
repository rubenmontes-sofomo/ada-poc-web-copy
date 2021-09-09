import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Logo from './Logo'

export default {
  component: Logo,
  title: 'Components/Logo',
  decorators: [withDesign],
} as Meta

const Template: Story = () => <Logo />

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: {
    default: 'green',
  },
}
