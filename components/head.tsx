import { default as NextHead } from 'next/head'

const Head = () => (
  <NextHead>
    <title>Raika Toriyama | pvcresin</title>
    <meta charSet='UTF-8' />
    <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='author' content='pvcresin' />
    <meta name='description' content='pvcresin portfolio' />
    <meta name='keywords' content='pvcresin,raika toriyama,鳥山 らいか,鳥山らいか' />
    <meta name='theme-color' content='#1a1819' />
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
  </NextHead>
)

export default Head
