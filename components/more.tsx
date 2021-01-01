import Link from 'next/link'

import { getClassNameFunction } from 'utils'

import './more.scss'

const getClassName = getClassNameFunction('componentsMore')

const More: React.FC<{ text?: string; link: string }> = ({ text = 'more', link }) => (
  <div className={getClassName()}>
    <Link href={link}>
      <span className={getClassName('moreButton')}>{text}</span>
    </Link>
  </div>
)

export default More
