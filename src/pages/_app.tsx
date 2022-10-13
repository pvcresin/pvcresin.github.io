import '../styles/index.scss'

import Head from 'next/head'

import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Raika Toriyama | pvcresin</title>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content='pvcresin' />
      <meta name='description' content='pvcresin portfolio' />
      <meta name='keywords' content='pvcresin,raika toriyama,鳥山 らいか,鳥山らいか' />
      <meta name='theme-color' content='#1a1819' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App