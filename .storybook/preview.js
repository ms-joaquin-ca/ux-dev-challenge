import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Normalize } from '../src/helpers'
import { theme } from '../src/theme'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Story />
    </ThemeProvider>
  ),
]

export default preview
