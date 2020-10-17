import '../styles/index.scss'

import Head from '../components/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}
