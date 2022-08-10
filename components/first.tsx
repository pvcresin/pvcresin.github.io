import { FaChevronDown } from 'react-icons/fa'

import { Social } from '@components/social'

import { FadeInSection } from './FadeInSection'
import styles from './first.module.scss'

export const First = () => (
  <div className={styles.root}>
    <div className='container'>
      <FadeInSection>
        <h1 className={styles.name}>Raika Toriyama</h1>
        <p className={styles.description}>Software Engineer</p>
        <Social />
      </FadeInSection>
    </div>
    <FadeInSection>
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}>
          <FaChevronDown size='3rem' />
        </div>
      </div>
    </FadeInSection>
  </div>
)
