import { FaChevronDown } from 'react-icons/fa'

import { FadeInSection } from '@/components/FadeInSection'
import { Social } from '@/components/Social'

import styles from './First.module.scss'
import { WidthContainer } from './WidthContainer'

export const First = () => (
  <div className={styles.root}>
    <WidthContainer>
      <h1 className={styles.name}>Raika Toriyama</h1>
      <FadeInSection>
        <p className={styles.description}>Software Engineer a.k.a. pvcresin</p>
        <Social />
      </FadeInSection>
    </WidthContainer>
    <FadeInSection>
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}>
          <FaChevronDown size='3rem' />
        </div>
      </div>
    </FadeInSection>
  </div>
)
