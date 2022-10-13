import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaFolder, FaListUl } from 'react-icons/fa'

import { handlers } from '@utils/keyboardListener'

import styles from './Navigation.module.scss'

export const Navigation = () => {
  const { pathname } = useRouter()

  return (
    <nav className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Link href='/'>
          <div
            className={pathname === '/' ? styles.itemLogoActive : styles.itemLogo}
            tabIndex={0}
            {...handlers}
          >
            <img className={styles.icon} src='/icon-pvcresin.svg' alt='' loading='lazy' />
            <span className={styles.logoText}>pvcresin</span>
          </div>
        </Link>
        <ul className={styles.wideLinkList}>
          <Link href='/works'>
            <li
              className={pathname.startsWith('/works') ? styles.itemActive : styles.item}
              tabIndex={0}
              {...handlers}
            >
              <FaFolder size='1.2rem' />
              <span className={styles.linkText}>Works</span>
            </li>
          </Link>
          <Link href='/news'>
            <li
              className={pathname.startsWith('/news') ? styles.itemActive : styles.item}
              tabIndex={0}
              {...handlers}
            >
              <FaListUl size='1.2rem' />
              <span className={styles.linkText}>News</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
