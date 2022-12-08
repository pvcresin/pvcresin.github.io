import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NewsList } from '@/components/Newslist'
import { SectionTitle } from '@/components/SectionTitle'
import { articles, talks, interviews } from '@/data/news'

import styles from './news.module.scss'

const NewsPage = () => (
  <div className={`root ${styles.root}`}>
    <Navigation />
    <section className={styles.content}>
      <div className='container'>
        <SectionTitle>Interviews</SectionTitle>
        <NewsList newsData={interviews} />
      </div>
      <div className='container'>
        <SectionTitle>Talks</SectionTitle>
        <NewsList newsData={talks} />
      </div>
      <div className='container'>
        <SectionTitle>Articles</SectionTitle>
        <NewsList newsData={articles} />
      </div>
    </section>
    <Footer />
  </div>
)

export default NewsPage
