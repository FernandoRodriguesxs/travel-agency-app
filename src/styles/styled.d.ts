import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        primary: string
      }
      black: string
      white: string
    }
  }
}
