import Link from 'next/link'

import { getClassNameFunction } from 'utils'

import './more.scss'

const getClassName = getClassNameFunction('components-more')

const More: React.FC<{ text?: string; link: string }> = ({ text = 'more', link }) => (
  <div className={getClassName()}>
    <Link href={link}>
      <span className={getClassName('more-button')}>{text}</span>
    </Link>
  </div>
)

export default More
