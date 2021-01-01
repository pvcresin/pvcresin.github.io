import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'

import '../styles/index.scss'

import Head from 'components/head'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}
