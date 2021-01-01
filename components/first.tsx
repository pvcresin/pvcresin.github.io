import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faChevronDown} size='3x' />
      </div>
    </div>
  </div>
)

export default First
