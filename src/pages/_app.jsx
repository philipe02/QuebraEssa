import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Projeto Hackaton - Boilerplate</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        <meta
          name="description"
          content="A simple project starter to work with React, NextJS and Styled Components"
        />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&display=swap"
        rel="stylesheet"
      />
      {/* Icones redes socias */}
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
