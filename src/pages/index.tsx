import { About } from '@/components/About'
import { First } from '@/components/First'
import { Footer } from '@/components/Footer'
import { Like } from '@/components/Like'
import { List } from '@/components/List'
import { Navigation } from '@/components/Navigation'
import { SectionTitle } from '@/components/SectionTitle'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { awards, clubs, publications } from '@/data/list'

import styles from './index.module.scss'

const IndexPage = () => (
  <div className='root'>
    <Navigation />
    <First />
    <section className={[styles.section, styles.section].join(' ')}>
      <About />
    </section>
    <section className={styles.section}>
      <div className='container'>
        <SectionTitle>Like</SectionTitle>
        <Like />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <SectionTitle>Skills</SectionTitle>
        <Skills />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <SectionTitle>Timeline</SectionTitle>
        <Timeline />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <SectionTitle>Awards</SectionTitle>
        <List items={awards} />
        <SectionTitle>Publications</SectionTitle>
        <List items={publications} />
        <SectionTitle>Clubs</SectionTitle>
        <List items={clubs} />
      </div>
    </section>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
