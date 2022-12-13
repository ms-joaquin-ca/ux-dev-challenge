import type { Story, Meta } from '@storybook/react'

import type { ButtonProps } from 'typings/components'
import { Button } from 'components'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

const button = Template.bind({})

button.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  elevation: 2,
}

export { button }
