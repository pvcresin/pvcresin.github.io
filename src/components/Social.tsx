import { FaXTwitter, FaGithub, FaInstagram, FaBookOpen } from 'react-icons/fa6'

import { handlers } from '@/utils/KeyboardListener'

import styles from './Social.module.scss'

export const Social = () => (
  <ul className={styles.iconList}>
    <li className={styles.iconListItem}>
      <a
        className={styles.link}
        href='https://x.com/pvcresin/'
        target='_blank'
        title='X'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaXTwitter size='2rem' />
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
        title='Blog'
        rel='noopener noreferrer'
        {...handlers}
      >
        <FaBookOpen size='2rem' />
      </a>
    </li>
  </ul>
)
