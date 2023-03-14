import 'styled-components'

type Palette = {
  main: string
  light?: string
  dark?: string
  contrastText: string
}

type Font = {
  fontSize: string | number
  fontFamily?: string
  fontWeight?: string | number
  lineHeight?: string | number
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string
        white: string
      }
      primary: Palette
      secondary: Palette
      grey: {
        100: string
        300: string
        500: string
        900: string
      }
    }
    typography: {
      body1: Font
      body2: Font
      body3: Font
      body4: Font
      button: Font
      h1: Font
      h2: Font
      h3: Font
      h4: Font
      h5: Font
    }
    shape: {
      borderRadius: number
    }
    spacing: (...args: unknown[]) => string
    boxShadow: (depth: number) => string
  }
}
