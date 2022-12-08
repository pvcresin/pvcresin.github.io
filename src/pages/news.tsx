import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NewsList } from '@/components/Newslist'
import { SectionTitle } from '@/components/SectionTitle'
import { WidthContainer } from '@/components/WidthContainer'
import { articles, talks, interviews } from '@/data/news'

import styles from './news.module.scss'

const NewsPage = () => (
  <div className={`root ${styles.root}`}>
    <Navigation />
    <section className={styles.content}>
      <WidthContainer>
        <SectionTitle>Interviews</SectionTitle>
        <NewsList newsData={interviews} />
        <SectionTitle>Talks</SectionTitle>
        <NewsList newsData={talks} />
        <SectionTitle>Articles</SectionTitle>
        <NewsList newsData={articles} />
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default NewsPage
