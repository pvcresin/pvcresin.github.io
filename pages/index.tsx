import { NextPage } from 'next'
import Link from 'next/link'

const IndexPage: NextPage<{}> = ({}) => (
  <div>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <h1>Next</h1>
  </div>
)

export default IndexPage
