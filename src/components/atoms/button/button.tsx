import type { ButtonProps } from 'typings'

import { StyledButton } from './button.styled'

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
