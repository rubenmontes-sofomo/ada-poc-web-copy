import React from 'react'

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Input, { InputProps } from './Input'

export default {
  component: Input,
  title: 'Components/Input',
  decorators: [withDesign],
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 'Form Field Title',
}
Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/33BOAzBmMBipSKpp9w9CyG/The-Pattern-Library-Ada?node-id=0%3A1',
  },
}

export const Big = Template.bind({})
Big.args = {
  value: 'Form Field Title',
  big: true,
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
}
export const WithLabelBig = Template.bind({})
WithLabelBig.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
  big: true,
}
export const WithLabelPassword = Template.bind({})
WithLabelPassword.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
  type: 'password',
}
export const WithLabelPasswordBig = Template.bind({})
WithLabelPasswordBig.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
  type: 'password',
  big: true,
}
export const ErrorsOneState = Template.bind({})
ErrorsOneState.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
  errorMessages: ['Error state message'],
}
export const ErrorsMultipleStates = Template.bind({})
ErrorsMultipleStates.args = {
  value: 'Form Field Title',
  label: 'Form Field Title',
  errorMessages: ['Error state message line 1', 'Error state message line 2'],
}
