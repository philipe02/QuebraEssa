import Header from 'components/Header'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}

export default App
