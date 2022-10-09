import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang='ja'>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <link rel='shortcut icon' href='/favicon.ico' />

      {/* font */}
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans+JP&display=swap'
        rel='stylesheet'
      />

      {/* polyfill */}
      <script
        crossOrigin='anonymous'
        src='https://polyfill.io/v3/polyfill.min.js?features=default'
        defer
      ></script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
