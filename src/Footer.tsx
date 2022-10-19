import styles from './Footer.module.scss'

export const Footer = () => (
  <p className={styles.root}>© 2015-{new Date().getFullYear()} pvcresin</p>
)
