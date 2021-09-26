import type { AppProps } from 'next/app'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { LightsContext, Lights } from '../context/LightsContext'
import { GlobalStyle, theme } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const [light, setLight] = useState(Lights.Dark)

  return (
    <LightsContext.Provider value={{light, setLight}}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider >
    </LightsContext.Provider>
  )
}
export default MyApp
