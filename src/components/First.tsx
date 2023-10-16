import { FaChevronDown } from 'react-icons/fa6'

import { FadeInSection } from '@/components/FadeInSection'
import { Social } from '@/components/Social'

import styles from './First.module.scss'
import { WidthContainer } from './WidthContainer'

export const First = () => (
  <div className={styles.root}>
    <FadeInSection>
      <WidthContainer>
        <h1 className={styles.name}>Raika Toriyama</h1>
        <p className={styles.description}>Software Engineer as @pvcresin</p>
        <Social />
      </WidthContainer>
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}>
          <FaChevronDown size='3rem' />
        </div>
      </div>
    </FadeInSection>
  </div>
)
