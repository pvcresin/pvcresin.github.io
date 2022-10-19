import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NewsList } from '@/components/Newslist'
import { articles, talks, interviews } from '@/data/news'

import styles from './news.module.scss'

const NewsPage = () => (
  <div className={`root ${styles.root}`}>
    <Navigation />
    <section className={styles.content}>
      <div className='container'>
        <h2 className='section-title'>Interviews</h2>
        <NewsList newsData={interviews} />
      </div>
      <div className='container'>
        <h2 className='section-title'>Talks</h2>
        <NewsList newsData={talks} />
      </div>
      <div className='container'>
        <h2 className='section-title'>Articles</h2>
        <NewsList newsData={articles} />
      </div>
    </section>
    <Footer />
  </div>
)

export default NewsPage
