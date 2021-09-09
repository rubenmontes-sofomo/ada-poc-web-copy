import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Button, { ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withDesign],
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Basic Button Primary',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  text: 'Basic Button Primary',
  icon: {
    src: '/icons/bookmark-white.png',
    width: 17,
    height: 24,
    alt: 'Bookmark',
  },
}

export const Small = Template.bind({})
Small.args = {
  text: 'Basic Button Primary',
  small: true,
}

export const Big = Template.bind({})
Big.args = {
  text: 'Basic Button Primary',
  big: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Basic Button Primary',
  secondary: true,
}
Secondary.parameters = {
  backgrounds: {
    default: 'green',
  },
}

export const PrimaryOverlay = Template.bind({})
PrimaryOverlay.args = {
  text: 'Basic Button Primary',
  overlayPrimary: true,
}

export const PrimaryOverlaySmall = Template.bind({})
PrimaryOverlaySmall.args = {
  text: 'Basic Button Primary',
  overlayPrimary: true,
  small: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Basic Button Primary',
  disabled: true,
}

export const DisabledSmall = Template.bind({})
DisabledSmall.args = {
  text: 'Basic Button Primary',
  disabled: true,
  small: true,
}

export const SecondaryOverlay = Template.bind({})
SecondaryOverlay.args = {
  text: 'Basic Button Primary',
  overlaySecondary: true,
}
SecondaryOverlay.parameters = {
  backgrounds: {
    default: 'green',
  },
}

export const SecondaryOverlaySmall = Template.bind({})
SecondaryOverlaySmall.args = {
  text: 'Basic Button Primary',
  overlaySecondary: true,
  small: true,
}
SecondaryOverlaySmall.parameters = {
  backgrounds: {
    default: 'green',
  },
}
