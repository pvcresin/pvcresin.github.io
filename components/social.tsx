import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faRss } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faTwitter} size='2x' />
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
        <FontAwesomeIcon icon={faGithub} size='2x' />
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
        <FontAwesomeIcon icon={faInstagram} size='2x' />
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
        <FontAwesomeIcon icon={faRss} size='2x' />
      </a>
    </li>
  </ul>
)

export default Social
