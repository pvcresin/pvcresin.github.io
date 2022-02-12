import { FaTwitter, FaGithub, FaInstagram, FaPenSquare } from 'react-icons/fa'

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
        <FaTwitter size='2x' />
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
        <FaGithub size='2x' />
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
        <FaInstagram size='2x' />
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
        <FaPenSquare size='2x' />
      </a>
    </li>
  </ul>
)

export default Social
