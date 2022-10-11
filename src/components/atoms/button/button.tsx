import { StyledButton } from './button.styled'

type ButtonProps = {
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props

  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
