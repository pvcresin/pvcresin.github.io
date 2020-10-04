import { NextPage } from 'next'
import Link from 'next/link'

const AboutPage: NextPage<{}> = ({}) => (
  <div>
    <h1>About(Profile)Page</h1>
    <Link href='/'>
      <a>Index</a>
    </Link>
  </div>
)

export default AboutPage
