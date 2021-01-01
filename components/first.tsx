import Social from './social'

import styles from './first.module.scss'

const First = () => (
  <div className={styles.root}>
    {/* for vertical centering */}
    <nav />
    <div className='container'>
      <h1 className={styles.name}>Raika Toriyama</h1>
      <p className={styles.description}>Web / Android Developer</p>
      <Social />
    </div>
    <div className='container'>
      <div className={styles.arrow}>
        <i className='fas fa-chevron-down fa-3x'></i>
      </div>
    </div>
  </div>
)

export default First
