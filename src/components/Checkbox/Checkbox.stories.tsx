import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
  decorators: [withDesign],
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {}
