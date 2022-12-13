import 'styled-components'
import type { DefaultTheme } from 'styled-components'

import { baseBoxShadow, basePalette, baseTypography } from './base-theme'

const theme: DefaultTheme = {
  palette: basePalette,
  typography: baseTypography,
  spacing: (...args: unknown[]) => {
    return args.map(item => (typeof item === 'string' ? item : `${8 * Number(item)}px`)).join(' ')
  },
  shape: {
    borderRadius: 6,
  },
  boxShadow: (depth: number) => baseBoxShadow(depth),
}

export default theme
