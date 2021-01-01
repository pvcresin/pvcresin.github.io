import { getClassNameFunction } from 'utils'

import './social.scss'

const getClassName = getClassNameFunction('componentsSocial')

const Social = () => (
  <div className={getClassName()}>
    <ul className={getClassName('iconList')}>
      <li className={getClassName('iconListItem')}>
        <a
          className={getClassName('link')}
          href='https://twitter.com/pvcresin/'
          target='_blank'
          title='Twitter'
          rel='noopener noreferrer'
        >
          <i className='fab fa-twitter fa-2x'></i>
        </a>
      </li>
      <li className={getClassName('iconListItem')}>
        <a
          className={getClassName('link')}
          href='https://github.com/pvcresin/'
          target='_blank'
          title='GitHub'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-2x'></i>
        </a>
      </li>
      <li className={getClassName('iconListItem')}>
        <a
          className={getClassName('link')}
          href='https://www.instagram.com/pvcresin/'
          target='_blank'
          title='Instagram'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram fa-2x'></i>
        </a>
      </li>
      <li className={getClassName('iconListItem')}>
        <a
          className={getClassName('link')}
          href='https://pvcresin.hatenablog.com/'
          target='_blank'
          title='Hatena Blog'
          rel='noopener noreferrer'
        >
          <i className='fas fa-rss fa-2x'></i>
        </a>
      </li>
    </ul>
  </div>
)

export default Social
