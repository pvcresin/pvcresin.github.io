import { About } from '@components/About'
import { First } from '@components/First'
import { Footer } from '@components/Footer'
import { Like } from '@components/Like'
import { List } from '@components/List'
import { Navigation } from '@components/Navigation'
import { Skills } from '@components/Skills'
import { Timeline } from '@components/Timeline'
import { awards, clubs, publications } from '@data/list'

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
        <h2 className='section-title'>Like</h2>
        <Like />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <h2 className='section-title'>Skills</h2>
        <Skills />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <h2 className='section-title'>Timeline</h2>
        <Timeline />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <h2 className='section-title'>Awards</h2>
        <List items={awards} />
        <h2 className='section-title'>Publications</h2>
        <List items={publications} />
        <h2 className='section-title'>Clubs</h2>
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
