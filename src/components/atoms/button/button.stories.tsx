import type { Meta, StoryFn } from '@storybook/react'

import type { ButtonProps } from 'typings/components'
import { Button } from 'components'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['outlined', 'contained'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

const button = Template.bind({})

button.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  disabled: false,
  fullWidth: false,
}

export { button }
