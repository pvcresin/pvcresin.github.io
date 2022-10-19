import { FaChevronDown } from 'react-icons/fa'

import { FadeInSection } from '@/components/FadeInSection'
import { Social } from '@/components/Social'

import styles from './First.module.scss'

export const First = () => (
  <div className={styles.root}>
    <div className='container'>
      <h1 className={styles.name}>Raika Toriyama</h1>
      <FadeInSection>
        <p className={styles.description}>Software Engineer a.k.a. pvcresin</p>
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
