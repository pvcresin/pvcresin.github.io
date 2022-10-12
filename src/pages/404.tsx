import { Footer } from '@components/Footer'
import { Navigation } from '@components/Navigation'

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
