import { FaChevronDown } from 'react-icons/fa'
import Social from './social'

import styles from './first.module.scss'

const First = () => (
  <div className={styles.root}>
    <div className='container'>
      <h1 className={styles.name}>Raika Toriyama</h1>
      <p className={styles.description}>Software Engineer</p>
      <Social />
    </div>
    <div className={styles.arrowContainer}>
      <div className={styles.arrow}>
        <FaChevronDown size='3rem' />
      </div>
    </div>
  </div>
)

export default First
