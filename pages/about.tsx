import { NextPage } from 'next'
import Link from 'next/link'

const AboutPage: NextPage<{}> = ({}) => (
  <div>
    <Link href='/'>
      <a>Index</a>
    </Link>
    <h1>About</h1>
  </div>
)

export default AboutPage
