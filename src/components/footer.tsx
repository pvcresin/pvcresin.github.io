import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>© 2015-{new Date().getFullYear()} pvcresin</p>
      </div>
    </div>
  )
}
