import type { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import { Normalize } from 'helpers/styles'

const provideTheme = (ui: ReactElement): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      {ui}
    </ThemeProvider>
  )
}

export default provideTheme
