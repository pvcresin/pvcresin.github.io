import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './navigation.module.scss'

const Navigation = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <span className={pathname === '/' ? styles.linkActive : styles.link}>
              Raika Toriyama
            </span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/about'>
            <span className={pathname === '/about' ? styles.linkActive : styles.link}>About</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/projects'>
            <span
              className={
                pathname === '/projects' || pathname === '/projects/[projectName]'
                  ? styles.linkActive
                  : styles.link
              }
            >
              Projects
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
