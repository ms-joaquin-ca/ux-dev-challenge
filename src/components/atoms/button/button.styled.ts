import styled from 'styled-components'
import { ButtonProps } from 'typings/components'

export const StyledButton = styled.button<ButtonProps>(
  ({
    theme: { palette, spacing, boxShadow, typography },
    color,
    variant,
    disabled,
    fullWidth,
  }) => ({
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: typography.button.fontSize,
    fontWeight: typography.button.fontWeight,
    padding: spacing(2, 3),

    ...(variant === 'contained' && {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,

      ...(color === 'secondary' && {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText,
      }),

      ...(disabled && {
        backgroundColor: palette.grey[100],
        color: palette.grey[500],
        cursor: 'not-allowed',
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

      ...(disabled && {
        border: `1px solid ${palette.grey[500]}`,
        color: palette.grey[500],
        cursor: 'not-allowed',
      }),
    }),

    ...(!disabled && {
      '&:hover': {
        boxShadow: boxShadow(2),
      },

      '&:active': {
        boxShadow: boxShadow(0),
      },
    }),

    ...(fullWidth && {
      width: '100%',
    }),
  })
)
