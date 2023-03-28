import type { Meta, StoryFn } from '@storybook/react'

import type { TextInputProps } from 'typings/components'
import { TextInput } from 'components'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    messageType: {
      options: ['info', 'error', 'success'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<typeof TextInput>

const Template: StoryFn<TextInputProps> = args => <TextInput {...args} />

const textInput = Template.bind({})

textInput.args = {
  label: 'Label',
  value: '',
  message: 'Message',
  messageType: 'info',
}

export { textInput }
