import styled from 'styled-components'
import { ButtonProps } from 'typings/components'

export const StyledButton = styled.button<ButtonProps>(
  ({ theme: { palette, shape, spacing, boxShadow, typography }, color, variant, elevation }) => ({
    border: 'none',
    borderRadius: shape.borderRadius,
    cursor: 'pointer',
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    padding: spacing(1, 2),
    textTransform: 'uppercase',

    ...(variant === 'contained' && {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,

      ...(color === 'secondary' && {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText,
      }),
    }),

    ...(variant === 'outlined' && {
      backgroundColor: 'transparent',
      border: `1px solid ${palette.primary.main}`,
      color: palette.primary.main,

      ...(color === 'secondary' && {
        border: `1px solid ${palette.secondary.main}`,
        color: palette.secondary.main,
      }),
    }),

    ...(variant === 'text' && {
      backgroundColor: 'transparent',
      color: palette.primary.main,

      ...(color === 'secondary' && {
        color: palette.secondary.main,
      }),
    }),

    ...(elevation && {
      boxShadow: boxShadow(elevation),
    }),
  })
)
