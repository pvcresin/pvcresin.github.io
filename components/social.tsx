import './social.scss'

const Social = () => {
  return (
    <div className='components-social'>
      <ul>
        <li>
          <a
            href='https://twitter.com/pvcresin/'
            target='_blank'
            title='Twitter'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        </li>
        <li>
          <a
            href='https://github.com/pvcresin/'
            target='_blank'
            title='GitHub'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github fa-2x'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/pvcresin/'
            target='_blank'
            title='Instagram'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        </li>
        <li>
          <a
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
}

export default Social
