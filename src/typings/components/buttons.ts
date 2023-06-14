import type { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = {
  variant: 'contained' | 'outlined'
  color: 'primary' | 'secondary'
  disabled: boolean
  fullWidth: boolean
}

type Button = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Omit<Button, 'color'> & Partial<CustomButtonProps>
