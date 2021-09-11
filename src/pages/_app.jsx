import Footer from 'components/Footer'
import Header from 'components/Header'
import { UserProvider } from 'context/UserContext'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../../public/nprogress.css'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
