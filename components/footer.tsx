import dayjs from 'dayjs'

import Social from './social'

import styles from './footer.module.scss'

const Footer = () => {
  const year = dayjs().format('YYYY')

  return (
    <div className={styles.root}>
      <div className={`container ${styles.container}`}>
        <Social />
        <p className={styles.copyright}>© {year} pvcresin</p>
      </div>
    </div>
  )
}

export default Footer
