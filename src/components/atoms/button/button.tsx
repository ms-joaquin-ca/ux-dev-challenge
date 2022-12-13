import type { ButtonProps } from 'typings/components'

import { StyledButton } from './button.styled'

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  elevation: 2,
}

export default Button
