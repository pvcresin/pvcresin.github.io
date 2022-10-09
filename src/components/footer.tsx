import { Social } from '@components/social'

import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Social />
        <p className={styles.copyright}>© pvcresin</p>
      </div>
    </div>
  )
}
