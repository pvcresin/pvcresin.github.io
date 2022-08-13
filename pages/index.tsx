import { About } from '@components/about'
import { First } from '@components/first'
import { Footer } from '@components/footer'
import { List } from '@components/list'
import { More } from '@components/more'
import { Navigation } from '@components/navigation'
import { Timeline } from '@components/timeline'
import { awards, publications } from '@data/list'

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
      </div>
    </section>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
