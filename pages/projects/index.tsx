import { NextPage } from 'next'
import Link from 'next/link'

const ProjectAllPage: NextPage<{}> = ({}) => (
  <div>
    <h1>ProjectAllPage</h1>
    <Link href='/'>
      <a>Index</a>
    </Link>
  </div>
)

export default ProjectAllPage
