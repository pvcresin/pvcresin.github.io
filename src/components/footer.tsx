import styles from './footer.module.scss'

export const Footer = () => {
  return <p className={styles.root}>© 2015-{new Date().getFullYear()} pvcresin</p>
}
