import { About } from '@components/about'
import { First } from '@components/first'
import { Footer } from '@components/footer'
import { List } from '@components/list'
import { More } from '@components/more'
import { Navigation } from '@components/navigation'
import { Timeline } from '@components/timeline'
import { awards, clubs, publications, schools } from '@data/list'

import styles from './index.module.scss'

const IndexPage = () => (
  <div className='root'>
    <Navigation />
    <First />
    <section className={styles.section}>
      <div className='container'>
        <About />
        <More text='detail' link='/about' />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <h2 className='section-title'>Timeline</h2>
        <Timeline />
        <h2 className='section-title'>Awards</h2>
        <List items={awards} />
        <h2 className='section-title'>Publications</h2>
        <List items={publications} />
        <h2 className='section-title'>Education</h2>
        <List items={schools} />
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
