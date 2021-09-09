import Footer from 'components/Footer'
import Header from 'components/Header'
import { UserProvider } from 'context/UserContext'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Quebra Essa</title>
        <meta
          name="description"
          content="A simple project starter to work with React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  )
}

export default App
