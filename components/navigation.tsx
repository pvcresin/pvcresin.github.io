import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { FaBars, FaFolder, FaListUl, FaRegAddressCard, FaRegUser, FaUserAlt } from 'react-icons/fa'

import styles from './navigation.module.scss'

const Navigation = () => {
  const router = useRouter()
  const { pathname } = router

  const linkList = useMemo(
    () => (
      <>
        <Link href='/about'>
          <li className={pathname === '/about' ? styles.itemActive : styles.item} tabIndex={2}>
            <FaUserAlt size='1.2rem' />
            <span className={styles.linkText}>About</span>
          </li>
        </Link>
        <Link href='/works'>
          <li
            className={
              pathname === '/works' || pathname === '/works/[workKey]'
                ? styles.itemActive
                : styles.item
            }
            tabIndex={3}
          >
            <FaFolder size='1.2rem' />
            <span className={styles.linkText}>Works</span>
          </li>
        </Link>
        <Link href='/news'>
          <li className={pathname === '/news' ? styles.itemActive : styles.item} tabIndex={4}>
            <FaListUl size='1.2rem' />
            <span className={styles.linkText}>News</span>
          </li>
        </Link>
      </>
    ),
    [pathname],
  )

  return (
    <nav className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Link href='/'>
          <span className={pathname === '/' ? styles.itemLogoActive : styles.itemLogo} tabIndex={1}>
            <img className={styles.icon} src='/icon-pvcresin.svg' alt='' loading='lazy' />
            <span className={styles.logoText}>pvcresin</span>
          </span>
        </Link>
        <ul className={styles.wideLinkList}>{linkList}</ul>
      </div>
    </nav>
  )
}

export default Navigation
