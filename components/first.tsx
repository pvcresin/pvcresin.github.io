import { FaChevronDown } from 'react-icons/fa'

import Social from './social'

import styles from './first.module.scss'

const First = () => (
  <div className={styles.root}>
    {/* for vertical centering */}
    <nav />
    <div className='container'>
      <h1 className={styles.name}>Raika Toriyama</h1>
      <p className={styles.description}>Software Engineer</p>
      <Social />
    </div>
    <div className='container'>
      <div className={styles.arrow}>
        <FaChevronDown size='3x' />
      </div>
    </div>
  </div>
)

export default First
