import { NextPage } from 'next'
import Link from 'next/link'

const NotFoundPage: NextPage<{}> = ({}) => (
  <div>
    <h1>NotFound(Other)Page</h1>
    <Link href='/'>
      <a>Index</a>
    </Link>
  </div>
)

export default NotFoundPage
