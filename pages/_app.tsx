import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'

import '../styles/index.scss'

import Head from 'components/head'

const App = ({ Component, pageProps }: any) => (
  <>
    <Head />
    <Component {...pageProps} />
  </>
)

export default App
