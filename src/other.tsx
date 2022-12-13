import { BrowserRouter } from 'react-router-dom'
import { Router } from 'router'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import { Normalize } from 'helpers'

const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
)

export default App
