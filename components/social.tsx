import styles from './social.module.scss'

const Social = () => (
  <ul className={styles.iconList}>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://twitter.com/pvcresin/'
        target='_blank'
        title='Twitter'
        rel='noopener noreferrer'
      >
        <i className='fab fa-twitter fa-2x'></i>
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://github.com/pvcresin/'
        target='_blank'
        title='GitHub'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github fa-2x'></i>
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://www.instagram.com/pvcresin/'
        target='_blank'
        title='Instagram'
        rel='noopener noreferrer'
      >
        <i className='fab fa-instagram fa-2x'></i>
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://pvcresin.hatenablog.com/'
        target='_blank'
        title='Hatena Blog'
        rel='noopener noreferrer'
      >
        <i className='fas fa-rss fa-2x'></i>
      </a>
    </li>
  </ul>
)

export default Social
