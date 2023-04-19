import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/global'
import { DefaultTheme } from './style/theme/default'
import { Router } from './Route'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
