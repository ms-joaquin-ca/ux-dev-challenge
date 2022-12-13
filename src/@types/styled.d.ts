import 'styled-components'

type Palette = {
  main: string
  contrastText: string
}

type Font = {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  lineHeight?: string | number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: Palette
      secondary: Palette
    }
    typography: {
      body1: Font
      body2: Font
      button: Font
    }
    shape: {
      borderRadius: number
    }
    spacing: (...args: unknown[]) => string
    boxShadow: (depth: number) => string
  }
}
