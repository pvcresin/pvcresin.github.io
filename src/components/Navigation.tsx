import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaFolder, FaListUl } from 'react-icons/fa6'

import { handlers } from '@/utils/KeyboardListener'

import styles from './Navigation.module.scss'
import { WidthContainer } from './WidthContainer'

export const Navigation = () => {
  const pathname = usePathname() || ''

  return (
    <nav className={styles.root}>
      <WidthContainer>
        <div className={styles.container}>
          <Link
            href='/'
            className={pathname === '/' ? styles.itemLogoActive : styles.itemLogo}
            tabIndex={0}
            {...handlers}
          >
            <div className={styles.topLinkContainer}>
              <img className={styles.icon} src='/icon-pvcresin.svg' alt='' loading='lazy' />
              <span className={styles.logoText}>pvcresin</span>
            </div>
          </Link>
          <div>
            <Link
              href='/works'
              className={pathname.startsWith('/works') ? styles.itemActive : styles.item}
              tabIndex={0}
              {...handlers}
            >
              <FaFolder size='1.2rem' />
              <span className={styles.linkText}>Works</span>
            </Link>
            <Link
              href='/news'
              className={pathname.startsWith('/news') ? styles.itemActive : styles.item}
              tabIndex={0}
              {...handlers}
            >
              <FaListUl size='1.2rem' />
              <span className={styles.linkText}>News</span>
            </Link>
          </div>
        </div>
      </WidthContainer>
    </nav>
  )
}
