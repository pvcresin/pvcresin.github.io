import Link from 'next/link'

import './more.scss'

const More: React.FC<{ text?: string; link: string; title: string }> = ({
  text = 'more',
  link,
  title,
}) => {
  return (
    <div className='components-more'>
      <Link href={link}>
        <a>
          <span className='more-button'>{text}</span>
        </a>
      </Link>
    </div>
  )
}

export default More
