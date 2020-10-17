import { NextPage } from 'next'
import Link from 'next/link'

import Footer from '../components/footer'

const IndexPage: NextPage<{}> = ({}) => (
  <div>
    <h1>Index(Top)Page</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>
    </p>
    <p>
      <Link href='/projects/SensorPipe'>
        <a>SensorPipe</a>
      </Link>
    </p>
    <p>
      <Link href='/not-found'>
        <a>NotFound(Other)</a>
      </Link>
    </p>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
