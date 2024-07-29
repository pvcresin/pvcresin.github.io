'use client'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NewsList } from '@/components/Newslist'
import { SectionTitle } from '@/components/SectionTitle'
import { WidthContainer } from '@/components/WidthContainer'
import { articles, talks, interviews } from '@/data/news'

import styles from './page.module.scss'

const NewsPage = () => (
  <div className={`root ${styles.root}`}>
    <Navigation />
    <section className={styles.content}>
      <WidthContainer>
        <SectionTitle>Talks</SectionTitle>
        <NewsList newsData={talks} />
        <SectionTitle>Articles</SectionTitle>
        <NewsList newsData={articles} />
        <SectionTitle>Interviews</SectionTitle>
        <NewsList newsData={interviews} />
      </WidthContainer>
    </section>
    <Footer />
  </div>
)

export default NewsPage
