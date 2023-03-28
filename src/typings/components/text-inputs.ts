import type { HTMLAttributes } from 'react'

type CustomTextInputProps = {
  label: string
  value?: string
  message?: string
  messageType?: 'error' | 'success' | 'info'
}

type TextInput = HTMLAttributes<HTMLInputElement>

export type TextInputProps = Omit<TextInput, 'placeholder'> & CustomTextInputProps
