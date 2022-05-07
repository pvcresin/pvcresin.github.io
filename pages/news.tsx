import Footer from 'components/footer'
import Navigation from 'components/navigation'
import Articles from 'components/articles'

import styles from './news.module.scss'

const NewsPage = () => (
  <div className={styles.root}>
    <Navigation />
    <section className={`pure-u-8-12 ${styles.content}`}>
      <div className='container'>
        <h2 className='section-title'>Articles</h2>
        <Articles />
      </div>
    </section>
    <Footer />
  </div>
)

export default NewsPage
