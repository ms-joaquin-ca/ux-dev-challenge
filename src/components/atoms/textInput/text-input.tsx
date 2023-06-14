import { useState, forwardRef } from 'react'

import type { TextInputProps } from 'typings/components'

import { StyledTextInputContainer } from './text-input.styled'

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { label, value, onFocus, onBlur, message, messageType, ...rest } = props

  const [focused, setFocused] = useState<boolean>(false)

  const isFocused = focused || Boolean(String(value).length)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true)

    onFocus?.(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)

    onBlur?.(e)
  }

  return (
    <StyledTextInputContainer focused={isFocused} messageType={messageType}>
      <label htmlFor={rest.id}>{label}</label>
      <input
        ref={ref}
        value={value}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <span>{message}</span>
    </StyledTextInputContainer>
  )
})

TextInput.displayName = 'TextInput'

TextInput.defaultProps = {
  messageType: 'info',
}

export default TextInput
