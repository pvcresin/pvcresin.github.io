import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

import styles from './404.module.scss'

const NotFoundPage = () => (
  <div className='root'>
    <Navigation />
    <section className={styles.content}>
      <div className='container'>
        <h1>Page Not Found</h1>
      </div>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
