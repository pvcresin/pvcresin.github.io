import { Articles } from '@components/articles'
import { Footer } from '@components/footer'
import { Interviews } from '@components/interviews'
import { Navigation } from '@components/navigation'
import { Talks } from '@components/talks'

import styles from './news.module.scss'

const NewsPage = () => (
  <div className={`root ${styles.root}`}>
    <Navigation />
    <section className={styles.content}>
      <div className='container'>
        <h2 className='section-title'>Articles</h2>
        <Articles />
      </div>
      <div className='container'>
        <h2 className='section-title'>Talks</h2>
        <Talks />
      </div>
      <div className='container'>
        <h2 className='section-title'>Interviews</h2>
        <Interviews />
      </div>
    </section>
    <Footer />
  </div>
)

export default NewsPage
