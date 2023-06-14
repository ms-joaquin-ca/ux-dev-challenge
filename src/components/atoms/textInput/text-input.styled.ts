import styled from 'styled-components'
import { TextInputProps } from 'typings/components'

export const StyledTextInputContainer = styled.div<{ focused: boolean } & Partial<TextInputProps>>(
  ({ theme: { palette, typography }, focused, messageType }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '& > label': {
      ...typography.body2,
      width: 'fit-content',
      transition: 'transform 0.2s ease-in',
      transform: `translate(${focused ? '-4px, 4px' : '2px, 26px'}) scale(${focused ? 0.8 : 1})`,
      zIndex: 9,
    },
    '& > input': {
      ...typography.body2,
      minHeight: '28px',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: `2px solid ${focused ? palette.primary.main : palette.grey[500]}`,
      '&:focus': {
        outline: 'none',
      },
      zIndex: 10,
    },
    '& > span': {
      ...typography.body3,
      alignSelf: 'flex-end',
      fontSize: 12,
      fontWeight: 500,
      color: palette.grey[300],
      ...((messageType === 'error' || messageType === 'success') && {
        color: palette.grey[500],
      }),
    },
  })
)
