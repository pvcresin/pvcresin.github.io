import '../styles/index.scss'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raika Toriyama | pvcresin',
  description: 'pvcresin portfolio',
  keywords: ['pvcresin', 'raika toriyama', '鳥山 らいか', '鳥山らいか'],
  authors: [{ url: 'https://pvcresin.github.io/', name: 'pvcresin' }],
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang='ja'>
    <head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
