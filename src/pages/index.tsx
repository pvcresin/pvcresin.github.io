import { About } from '@/components/About'
import { First } from '@/components/First'
import { Footer } from '@/components/Footer'
import { Like } from '@/components/Like'
import { List } from '@/components/List'
import { Navigation } from '@/components/Navigation'
import { SectionTitle } from '@/components/SectionTitle'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { WidthContainer } from '@/components/WidthContainer'
import { awards, clubs, publications } from '@/data/list'

import styles from './index.module.scss'

const IndexPage = () => (
  <div className='root'>
    <Navigation />
    <First />
    <section className={styles.section}>
      <About />
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Like</SectionTitle>
        <Like />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Skills</SectionTitle>
        <Skills />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Timeline</SectionTitle>
        <Timeline />
      </WidthContainer>
    </section>
    <section className={styles.section}>
      <WidthContainer>
        <SectionTitle>Awards</SectionTitle>
        <List items={awards} />
        <SectionTitle>Publications</SectionTitle>
        <List items={publications} />
        <SectionTitle>Clubs</SectionTitle>
        <List items={clubs} />
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
