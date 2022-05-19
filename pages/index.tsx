import { First } from 'components/first'
import { About } from 'components/about'
import { Awards } from 'components/awards'
import { Publications } from 'components/publications'
import { More } from 'components/more'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { Timeline } from 'components/timeline'

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
        <Awards />
        <h2 className='section-title'>Publications</h2>
        <Publications />
      </div>
    </section>
    <Footer />
  </div>
)

export const getStaticProps = () => ({
  props: {},
})

export default IndexPage
