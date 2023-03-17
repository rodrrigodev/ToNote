import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'
import { SchoolDataContextProvider } from './contexts/SchoolDataContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SchoolDataContextProvider>
          <Router />
        </SchoolDataContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}
