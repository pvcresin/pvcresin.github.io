import { handlers } from '@utils/keyboardlistener'
import { FaTwitter, FaGithub, FaInstagram, FaPenSquare } from 'react-icons/fa'

import styles from './social.module.scss'

export const Social = () => (
  <ul className={styles.iconList}>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://twitter.com/pvcresin/'
        target='_blank'
        title='Twitter'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaTwitter size='2rem' />
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://github.com/pvcresin/'
        target='_blank'
        title='GitHub'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaGithub size='2rem' />
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://www.instagram.com/pvcresin/'
        target='_blank'
        title='Instagram'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaInstagram size='2rem' />
      </a>
    </li>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://pvcresin.hatenablog.com/'
        target='_blank'
        title='Hatena Blog'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaPenSquare size='2rem' />
      </a>
    </li>
  </ul>
)
