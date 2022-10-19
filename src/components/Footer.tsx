import styles from './Footer.module.scss'

export const Footer = () => (
  <footer className={styles.root}>© 2015-{new Date().getFullYear()} pvcresin</footer>
)
