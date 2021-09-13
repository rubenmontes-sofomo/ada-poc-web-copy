import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import LinkButton, { LinkProps } from './Link'

export default {
  component: LinkButton,
  title: 'Components/Link',
  decorators: [withDesign],
} as Meta

const Template: Story<LinkProps> = (args) => <LinkButton {...args} />

export const Overlay = Template.bind({})
Overlay.args = {
  text: 'Already a member? Log in',
  href: '/',
  overlay: true,
  icon: false,
}
Overlay.parameters = {
  backgrounds: {
    default: 'green',
  },
}
