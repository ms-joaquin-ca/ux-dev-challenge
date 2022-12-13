import { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = {
  variant: 'contained' | 'outlined' | 'text'
  color: 'primary' | 'secondary'
  elevation: number
}

type Button = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Omit<Button, 'color'> & Partial<CustomButtonProps>
