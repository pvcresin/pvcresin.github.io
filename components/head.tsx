import { default as NextHead } from 'next/head'

const Head = () => (
  <NextHead>
    <title>Raika Toriyama | pvcresin</title>
    <meta charSet='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='author' content='pvcresin' />
    <meta name='description' content='pvcresin portfolio' />
    <meta name='keywords' content='pvcresin,raika toriyama,鳥山 らいか,鳥山らいか' />
    <meta name='theme-color' content='#1a1819' />
    <link rel='icon' href='resources/favicon.ico' />
    <link rel='shortcut icon' href='resources/favicon.ico' />

    {/* font */}
    <link rel='stylesheet' href='https://fonts.googleapis.com/earlyaccess/notosansjp.css' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat' />

    {/* pure */}
    <link
      rel='stylesheet'
      href='https://unpkg.com/purecss@1.0.0/build/pure-min.css'
      integrity='sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w'
      crossOrigin='anonymous'
    />
    <link rel='stylesheet' href='https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css' />

    {/* font awesome */}
    <script src='https://use.fontawesome.com/releases/v5.12.0/js/all.js' defer></script>

    {/* polyfill  */}
    <script
      crossorigin='anonymous'
      src='https://polyfill.io/v3/polyfill.min.js?features=es2015'
      defer
    ></script>
  </NextHead>
)

export default Head
