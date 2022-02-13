import First from 'components/first'
import About from 'components/about'
import Projects from 'components/projects'
import Awards from 'components/awards'
import Publications from 'components/publications'
import Clubs from 'components/clubs'
import More from 'components/more'
import Footer from 'components/footer'

import styles from './index.module.scss'

const IndexPage = () => (
  <div className={styles.root}>
    <First />
    <section className={styles.section}>
      <div className='container'>
        <About />
        <More text='detail' link='/about' />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
        <h2 className='section-title'>Projects</h2>
        <Projects limit={3} />
        <More link='/projects' />
      </div>
    </section>
    <section className={styles.section}>
      <div className='container'>
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
